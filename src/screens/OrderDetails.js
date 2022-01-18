import Axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deliverOrder,
  detailsOrder,
  detailsAnyOrder,
  payOrder,
} from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import OrderItem from "../components/OrderItem";
import {
  ORDER_DELIVER_RESET,
  ORDER_PAY_RESET,
} from "../constants/orderConstants";

export default function OrderDetails(props) {
  const dispatch = useDispatch();
  const orderId = props.match.params.id;
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    if (userInfo.role === "admin") dispatch(detailsAnyOrder(orderId));
    else dispatch(detailsOrder(orderId));
  }, [dispatch, orderId]);

  return (
    <div className="bg-light p-2">
      <div className="bg-white m-5 shadow h-75 py-4">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox message={error} />
        ) : (
          <>
            <h1 className="display-4 text-center">
              Order <span className="text-secondary">{order.id}</span>
            </h1>
            <hr className="w-75 pb-5" />

            <div className="row mb-5 h-100">
              <div className="col-lg-8 h-100 border-control-cart pr-0">
                <div className="row pb-3 pl-5">
                  {order.orderItems.map((orderItem) => (
                    <OrderItem
                      orderItem={orderItem}
                      key={orderItem.id}
                    ></OrderItem>
                  ))}
                </div>
              </div>

              <div className="col-lg-4 p-5 border-left border-control-cart">
                <h2 className="text-center">
                  Order Summary <i className="fas fa-history fa-sm"></i>
                </h2>
                <ul className="list-group list-group-flush py-4">
                  <li className="list-group-item corners py-1">
                    <span className="float-left">Order ID</span>
                    <span className="float-right font-weight-light">
                      {order.id}
                    </span>
                  </li>
                  <li className="list-group-item corners py-1">
                    <span className="float-left">Date Placed</span>
                    <span className="float-right font-weight-light">
                      {order.createdAt}
                    </span>
                  </li>
                  <li className="list-group-item corners py-1">
                    <span className="float-left">Name</span>
                    <span className="float-right font-weight-light">
                      {order.shippingAddress.name}
                    </span>
                  </li>
                  <li className="list-group-item corners py-1">
                    <p className="float-left pb-0 my-0">Address</p>
                    <br />
                    <p className="font-weight-light my-0">
                      {order.shippingAddress.address},{" "}
                      {order.shippingAddress.city},{" "}
                      {order.shippingAddress.province},{" "}
                      {order.shippingAddress.postalCode}
                    </p>
                  </li>

                  <li className="list-group-item corners py-1">
                    <span className="float-left">Paid</span>
                    <span className="float-right font-weight-light">
                      {order.isPaid ? order.paidAt : "No"}
                    </span>
                  </li>
                  <li className="list-group-item corners py-1">
                    <span className="float-left">Payment Method</span>
                    <span className="float-right font-weight-light">
                      {order.paymentMethod}
                    </span>
                  </li>
                  <li className="list-group-item corners py-1">
                    <span className="float-left">Delivered</span>
                    <span className="float-right font-weight-light">
                      {order.isDelivered ? order.deliveredAt : "No"}
                    </span>
                  </li>

                  <li className="list-group-item corners py-1">
                    <span className="float-left">Subtotal</span>
                    <span className="float-right font-weight-light">
                      ${order.itemsPrice.toFixed(2)}
                    </span>
                  </li>

                  <li className="list-group-item corners py-1">
                    <span className="float-left">Shipping</span>
                    <span className="float-right font-weight-light">
                      ${order.shippingPrice.toFixed(2)}
                    </span>
                  </li>
                  <li className="list-group-item corners py-1">
                    <span className="float-left">Tax</span>
                    <span className="float-right font-weight-light">
                      ${order.taxPrice.toFixed(2)}
                    </span>
                  </li>
                  <li className="list-group-item corners py-2 font-weight-bold">
                    <span className="float-left">Total</span>
                    <span className="float-right">
                      ${order.totalPrice.toFixed(2)}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
