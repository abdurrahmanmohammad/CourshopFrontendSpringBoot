import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password are not match");
    } else {
      dispatch(register(name, email, password, confirmPassword));
    }
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
              {loading && <LoadingBox />}
              {error && <MessageBox message={error} />}
              <h1 className="display-4 text-center pb-3">Register</h1>

              <div className="input-group mb-3 py-1">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon-name">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  aria-describedby="basic-addon-name"
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
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon-email"
                  id="email"
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
                  className="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon-password"
                  id="password"
                  placeholder="Password"
                  required
                  minLength="8"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="input-group mb-3 pt-1 pb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="basic-addon-confirm-password"
                  >
                    <i className="fas fa-lock"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  aria-label="Confirm Password"
                  aria-describedby="basic-addon-confirm-password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  required
                  minLength="8"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-secondary btn-block corners"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
