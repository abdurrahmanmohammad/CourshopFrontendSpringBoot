import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, listUsers } from '../actions/userActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { USER_DETAILS_RESET } from '../constants/userConstants'
import UserRow from '../components/UserRow'

export default function UserList(props) {
  const dispatch = useDispatch()

  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userDelete = useSelector((state) => state.userDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = userDelete

  useEffect(() => {
    dispatch(listUsers())
    dispatch({
      type: USER_DETAILS_RESET,
    })
  }, [dispatch, successDelete])
  const deleteHandler = (user) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteUser(user.id))
    }
  }

  return (
    <div className="bg-light p-2">
      <div className="bg-white m-5 shadow p-5">
        <h1 className="display-4 text-center pb-3">User List</h1>

        {loadingDelete && <LoadingBox></LoadingBox>}
        {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <table
            className="
            table table-striped table-hover
            p-5
            table-bordered table-responsive-md
          "
          >
            <thead className="thead-dark">
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Admin</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <UserRow
                  user={user}
                  deleteHandler={deleteHandler}
                  key={user.id}
                ></UserRow>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
