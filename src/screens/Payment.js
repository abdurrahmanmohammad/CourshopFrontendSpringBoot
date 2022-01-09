import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import {
  createOrder,
  deliverOrder,
  detailsOrder,
  payOrder,
} from "../actions/orderActions";
import OrderSummary from "../components/OrderSummary";
import {
  ORDER_CREATE_RESET,
  ORDER_DELIVER_RESET,
  ORDER_PAY_RESET,
} from "../constants/orderConstants";
import Axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function Payment(props) {
  /** *************** Utils *************** */
  const dispatch = useDispatch();

  /** *************** Extract cart data from Redux store *************** */
  // Retrieve cart from local storage
  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress, paymentMethod } = cart;
  // Retrieve created order after submission
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
  // Retrieve user
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  /** *************** Validation *************** */
  if (!cartItems || cartItems.length === 0) props.history.push("/shipping");
  if (!shippingAddress) props.history.push("/shipping");

  /** *************** Order Calculations *************** */
  //const shippingPrice = itemsPrice > 100 ? toPrice(0) : toPrice(10);
  const shippingPrice = 10;
  const itemsPrice = cartItems.reduce((a, c) => a + c.quantity * c.price, 0);
  const taxPrice = 0.15 * itemsPrice;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const placeOrderHandler = () => {
    const order = {
      user: userInfo._id,
      orderItems: cartItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    };

    dispatch(createOrder(order));
  };
  useEffect(() => {
    if (success) {
      dispatch({ type: ORDER_CREATE_RESET });
      props.history.push(`/order/my/${order._id}`);
    }
  }, [dispatch, order, props.history, success]);

  /** *************** Payment *************** */
  const tokenFunction = async (token) => {
    const order = {
      user: userInfo._id,
      orderItems: cartItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    };

    dispatch(createOrder(order));
    /*
    console.log(order);
    console.log(token);

    const response = await Axios.post("/api/orders/checkout", { token, order });
    const { status } = response.data;
    dispatch(createOrder({ ...order, paymentResult: status }));
    console.log(status);

    //
    console.log("Response:", response.data);
    if (status === "success") console.log("Success! Check email for details");
    else console.log("Something went wrong");
    */
  };

  return (
    <div className="container bg-white shadow p-5 my-5 col-8 justify-content-center">
      <div className="row">
        <div className="col-md-8 p-5 justify-content-center p-auto m-auto">
          <OrderSummary
            summary={{
              subtotal: itemsPrice,
              shipping: shippingPrice,
              tax: taxPrice,
              total: totalPrice,
            }}
          />
          <h1 className="display-5 text-center pb-3">Payment</h1>
          <StripeCheckout
            className="btn-block"
            stripeKey="pk_test_51JMxH6BU0X5rUalOTbG8eo3mCw2YuJWx6WSn2Q7m1Li9BnzkM2fLuQiAHzMEKs6NE5BAmPZVhXfwWJw5IzEm7obN00O70zIV37"
            token={tokenFunction}
            billingAddress
            shippingAddress
            amount={totalPrice * 100}
            name={"Courshop Order"}
          />
        </div>
      </div>
    </div>
  );
}
