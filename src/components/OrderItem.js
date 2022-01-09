import React from "react";
import { Link } from "react-router-dom";
import { PRODUCT_COVER } from "../constants/apiConstants";

export default function CartItem(props) {
  return (
    <div className="row pb-3 pl-5">
      <div className="d-none d-md-block col-md-3">
        <img
          className="p-auto m-auto d-block"
          style={{ width: "100px", height: "100px" }}
          src={PRODUCT_COVER(props.orderItem.product.imageCover)}
          alt={props.orderItem.name}
        />
      </div>

      <div className="col-sm-4 col-md-3">
        <Link
          className="font-weight-bold"
          to={`/product/${props.orderItem._id}`}
        >
          {" "}
          {props.orderItem.name}{" "}
        </Link>
        <p className="font-weight-light m-auto">
          Unit Price: ${props.orderItem.price.toFixed(2)}
        </p>
      </div>

      <div className="col-sm-4 col-md-3">
        Quantity: {props.orderItem.quantity}
      </div>

      <div className="d-none d-sm-block col-sm-4 col-md-3 text-center">
        <p>${(props.orderItem.price * props.orderItem.quantity).toFixed(2)}</p>
      </div>
    </div>
  );
}
