import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";
import { useSelector } from "react-redux";

export default function Cart(props) {
  // Retrieve saved cart from local storage
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const subtotal = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  const shipping = 10;
  const tax = (subtotal + shipping) * 0.1;
  const total = subtotal + shipping + tax;
  /*
  const [subtotal, setSubtotal] = useState(
    cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
  );
  const [shipping, setShipping] = useState(10);
  const [tax, setTax] = useState((subtotal + shipping) * 0.1);
  const [total, setTotal] = useState(subtotal + shipping + tax);
*/

  const checkoutHandler = () => {
    props.history.push("/shipping");
  };

  /*
  useEffect(() => {
    setSubtotal(cartItems.reduce((a, c) => a + c.price * c.quantity, 0));
    //setShipping(10)
    setTax((subtotal + shipping) * 0.1);
    setTotal(subtotal + shipping + tax);
  }, [cart.cartItems]);
*/
  return (
    <div className="bg-light p-2">
      <div className="bg-white m-5 shadow h-75 py-4">
        <h1 className="display-4 text-center">
          <i className="fas fa-shopping-cart"></i> Shopping Cart
        </h1>
        <hr className="w-75 pb-5" />

        {cartItems.length ? (
          <div className="row mb-5 h-100">
            <div className="col-lg-8 h-100 pr-0">
              {cartItems.map((cartItem) => (
                <CartItem cartItem={cartItem} key={cartItem._id} />
              ))}
            </div>

            <div className="col-lg-4 p-5 border-left border-control-cart">
              <OrderSummary
                summary={{ subtotal, shipping, tax, total }}
                key={"OrderSummary"}
              />

              <button
                className="btn btn-primary btn-block align-self-end"
                onClick={checkoutHandler}
              >
                <i className="fas fa-money-check" /> Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="alert alert-primary mx-5 corners" role="alert">
            No items in cart. Have fun shopping!
          </div>
        )}
      </div>
    </div>
  );
}
