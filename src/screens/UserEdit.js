import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsUser, updateUser } from '../actions/userActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { USER_UPDATE_RESET } from '../constants/userConstants'

export default function UserEdit(props) {
  const dispatch = useDispatch()
  const userId = props.match.params.id

  // Update User fields
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')

  /*
  // Update User password
  const [passwordCurrent, setPasswordCurrent] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  */

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userUpdate = useSelector((state) => state.userUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET })
      props.history.push('/userlist')
    }
    if (!user) {
      dispatch(detailsUser(userId))
    } else {
      setName(user.name)
      setEmail(user.email)
      setRole(user.role)
    }
  }, [dispatch, props.history, successUpdate, user, userId])

  const submitHandler = (e) => {
    e.preventDefault()
    // dispatch update profile
    /*
    if (password !== passwordConfirm) {
      alert("Password and Confirm Password Are Not Matched");
    } else {
      dispatch(
        updateUserProfile({
          userId: user._id,
          name,
          email,
        })
      );
    }
*/
    dispatch(updateUser({ id: userId, name, email, role }))
  }

  return (
    <div className="bg-light p-2 h-100 pb-5">
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="bg-white mx-auto mt-5 shadow h-75 p-5 w-50">
          {loadingUpdate && <LoadingBox></LoadingBox>}
          {errorUpdate && (
            <div className="alert alert-danger alert-dismissible " role="alert">
              {errorUpdate}
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
          {successUpdate && (
            <div
              className="alert alert-success alert-dismissible "
              role="alert"
            >
              Profile Updated Successfully
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}

          <div className="container px-5">
            <form onSubmit={submitHandler}>
              <h1 className="display-4 text-center pb-3">User Profile</h1>

              <div className="input-group mb-3 py-1">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon-name">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Name"
                  aria-label="Name"
                  aria-describedby="basic-addon1-name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="input-group mb-3 py-1">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon-email">
                    @
                  </span>
                </div>
                <input
                  type="email"
                  required
                  disabled
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon-email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/*
                <div className="input-group mb-3 py-1">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="basic-addon-old-password"
                  >
                    <i className="fas fa-lock-open"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Old Password"
                  aria-label="Password"
                  aria-describedby="basic-addon-old-password"
                  id="passwordCurrent"
                  onChange={(e) => setPasswordCurrent(e.target.value)}
                />
              </div>

              <div className="input-group mb-3 py-1">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="basic-addon-new-password"
                  >
                    <i className="fas fa-lock"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="New Password"
                  aria-label="New Password"
                  aria-describedby="basic-addon-new-password"
                  id="passwordConfirm"
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </div>

              <div className="input-group mb-3 pt-1 pb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="basic-addon-confirm-new-password"
                  >
                    <i className="fas fa-lock"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm New Password"
                  aria-label="Confirm New Password"
                  aria-describedby="basic-addon-confirm-new-password"
                />
              </div>
              */}

              <div className="input-group mb-3 input-group-sm">
                <div className="input-group-prepend">
                  <label
                    className="input-group-text"
                    htmlFor="inputGroupSelect01"
                  >
                    Role
                  </label>
                </div>
                <select
                  className="custom-select"
                  id="role"
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value={user.role} defaultValue>
                    {user.role}
                  </option>
                  <option value={user.role === 'ADMIN' ? 'CUSTOMER' : 'ADMIN'}>
                    {user.role === 'ADMIN' ? 'CUSTOMER' : 'ADMIN'}
                  </option>
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-secondary btn-block corners"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
