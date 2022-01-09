import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div className="login py-5">
      <div className="h-100 my-5 py-4">
        <div className="bg-white mx-auto mt-5 shadow h-75 p-5 w-50">
          <div className="container px-5">
            <form onSubmit={submitHandler}>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
              <h1 className="display-4 text-center pb-5">Login</h1>

              <div className="input-group mb-3 py-1">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon-email">
                    @
                  </span>
                </div>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon-email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-group mb-3 py-1">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon-password">
                    <i className="fas fa-lock"></i>
                  </span>
                </div>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon-password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-secondary btn-block corners"
              >
                Login
              </button>
              <small>
                Not registered? <Link to="/register">Create Account</Link>
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
