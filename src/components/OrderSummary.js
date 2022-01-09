import React from "react";

export default function OrderSummary(props) {
  return (
    <div>
      <h2 className="text-center">Order Summary</h2>
      <ul className="list-group list-group-flush py-4">
        <li className="list-group-item corners py-1">
          <span className="float-left">Subtotal</span>
          <span className="float-right font-weight-light">
            ${props.summary.subtotal.toFixed(2)}
          </span>
        </li>
        <li className="list-group-item corners py-1">
          <span className="float-left">Shipping</span>
          <span className="float-right font-weight-light">
            ${props.summary.shipping.toFixed(2)}
          </span>
        </li>
        <li className="list-group-item corners py-1">
          <span className="float-left">Tax</span>
          <span className="float-right font-weight-light">
            ${props.summary.tax.toFixed(2)}
          </span>
        </li>
        <li className="list-group-item corners py-2 font-weight-bold">
          <span className="float-left">Total</span>
          <span className="float-right">${props.summary.total.toFixed(2)}</span>
        </li>
      </ul>
    </div>
  );
}
