import React from "react";
import { Link } from "react-router-dom";

export default function OrderRow(props) {
  console.log(props)
  return (
    <tr>
      <td scope="row">{props.order.id}</td>
      <td>{props.order.createdAt}</td>
      <td>{props.order.user?.name}</td>
      <td>${props.order.totalPrice.toFixed(2)}</td>
      <td>{props.order.isPaid ? "True" : "False"}</td>
      <td>{props.order.isDelivered ? "True" : "False"}</td>
      <td>
        <Link
          className="btn btn-dark mr-2"
          to={`/order/${props.orderList ? "" : "my/"}${props.order.id}`}
        >
          Details
        </Link>
        {props.orderList && (
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => props.deleteHandler(props.order)}
          >
            <i className="fas fa-trash"></i>
          </button>
        )}
      </td>
    </tr>
  );
}
