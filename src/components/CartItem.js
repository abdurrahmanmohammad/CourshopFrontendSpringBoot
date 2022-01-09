import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { Link } from "react-router-dom";

import { PRODUCT_COVER } from "../constants/apiConstants";

export default function CartItem(props) {
  /** *************** Utils *************** */
  const dispatch = useDispatch();
  const product = props.cartItem;

  /** *************** Extract data from Redux store *************** */
  //const productDetails = useSelector((state) => state.productDetails);
  //const { loading, error, product } = productDetails;

  /** *************** Fetch data and render components *************** */
  /*
  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);
*/

  const removeFromCartHandler = (id) => dispatch(removeFromCart(id));
  return (
    <div className="row pb-3 pl-5">
      <div className="d-none d-md-block col-md-3">
        <img
          className="p-auto m-auto d-block"
          style={{ width: "100px", height: "100px" }}
          src={PRODUCT_COVER(product.imageCover)}
          alt="Product"
        />
      </div>

      <div className="col-sm-4 col-md-3">
        <Link className="font-weight-bold" to={`/product/${product._id}`}>
          {product.name}
        </Link>
        <p className="font-weight-light m-auto">
          Unit Price: ${product.price.toFixed(2)}
        </p>
        <a
          className="text-danger"
          style={{ cursor: "pointer" }}
          onClick={() => removeFromCartHandler(product._id)}
        >
          Remove
        </a>
      </div>

      <div className="col-sm-4 col-md-3">
        <div className="form-check form-check-inline input-group-sm">
          <label htmlFor="quantity" className="form-check-input">
            Quantity:{" "}
          </label>

          <select
            name="quantity"
            className="form-control"
            id="quantity"
            value={product.quantity}
            className="form-control quantity-input"
            onChange={(e) => {
              product.quantity = e.target.value;
              dispatch(addToCart(product));
            }}
          >
            {[...Array(product.countInStock).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="d-none d-sm-block col-sm-4 col-md-3 text-center">
        <p>${(product.price * props.cartItem.quantity).toFixed(2)}</p>
      </div>
    </div>
  );
}
