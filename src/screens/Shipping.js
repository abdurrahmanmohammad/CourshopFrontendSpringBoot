import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import Modal from "../components/Modal";

export default function Shipping(props) {
  const dispatch = useDispatch();

  // If user not signed in, send to login screen
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  if (!userInfo) props.history.push("/login");

  // If user has no items in cart, send to cart
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, cartItems } = cart;
  if (!cartItems.length) props.history.push("/cart");

  const [name, setName] = useState(shippingAddress.name);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [province, setProvince] = useState(shippingAddress.province);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);

  const submitHandler = (e) => {
    e.preventDefault();
    if (name && address && city && province && postalCode) {
      dispatch(
        saveShippingAddress({ name, address, city, province, postalCode })
      );
      props.history.push("/payment");
    } else {
      $("#exampleModalCenter").modal("show");
    }
  };

  return (
    <div className="container bg-white shadow p-5 my-5 col-8 justify-content-center">
      <div className="row">
        <div className="col-md-8 p-5 justify-content-center p-auto m-auto">
          <h1 className="display-5 text-center pb-3">Shipping Address</h1>
          <div className="input-group mb-3 py-1">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon-name">
                <i className="fas fa-user" />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              aria-label="Name"
              aria-describedby="basic-addon-name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group mb-3 py-1">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon-address">
                <i className="fas fa-map-marked-alt"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              aria-label="Address"
              aria-describedby="basic-addon-address"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="input-group mb-3 py-1">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon-city">
                <i className="fas fa-city"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="City"
              aria-label="City"
              aria-describedby="basic-addon-city"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="input-group mb-3 py-1">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon-province">
                <i className="fas fa-flag-usa"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="State / Province"
              aria-label="Province"
              aria-describedby="basic-addon-province"
              id="province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              required
            />
          </div>
          <div className="input-group mb-3 py-1">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon-postal-code">
                <i className="fab fa-usps"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Postal Code"
              aria-label="Postal Code"
              aria-describedby="basic-addon-postal-code"
              id="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </div>
          <button
            className="btn btn-primary btn-block corners"
            onClick={submitHandler}
          >
            {" "}
            Proceed
          </button>
        </div>
      </div>
      <Modal
        head={`Invalid Shipping Address`}
        body={"Make sure all input fields are set!"}
      />
    </div>
  );
}
