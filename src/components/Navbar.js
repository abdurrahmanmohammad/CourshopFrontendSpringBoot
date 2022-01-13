import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../actions/userActions'

export default function Navbar(props) {
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin
  const dispatch = useDispatch()
  const signoutHandler = () => {
    dispatch(signout())
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 px-5">
      <Link className="navbar-brand pr-2" to="/">
        <h4>Courshop</h4>
      </Link>
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        to="#"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarSupportedContent"
      >
        <form className="form-inline my-2 my-lg-0">
          {/*
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
            Search
          </button>
        */}
        </form>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          {userInfo ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>{' '}
                  Cart
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  to="#"
                >
                  <i className="fas fa-user"></i> {userInfo.name}
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/profile">
                    User Profile
                  </Link>
                  <Link className="dropdown-item" to="/orderhistory">
                    Order History
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link
                    className="dropdown-item"
                    to="/signout"
                    onClick={signoutHandler}
                  >
                    <i className="fas fa-user-times"></i> Logout
                  </Link>
                </div>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <i className="fas fa-sign-in-alt" /> Login
              </Link>
            </li>
          )}

          {userInfo && userInfo.role === 'admin' && (
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                to="#"
              >
                <i className="fas fa-user-shield"></i> Admin Menu
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/productlist">
                  Products
                </Link>
                <Link className="dropdown-item" to="/orderlist">
                  Orders
                </Link>
                <Link className="dropdown-item" to="/userlist">
                  Users
                </Link>
              </div>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}
