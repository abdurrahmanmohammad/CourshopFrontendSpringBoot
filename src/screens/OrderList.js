import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, listOrders } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { ORDER_DELETE_RESET } from "../constants/orderConstants";
import OrderRow from "../components/OrderRow";

export default function OrderList(props) {
  const dispatch = useDispatch();

  // Retrieve order list
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  useEffect(() => {
    dispatch(listOrders());
  }, [dispatch]);

  // Order delete
  const orderDelete = useSelector((state) => state.orderDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = orderDelete;

  useEffect(() => {
    dispatch({ type: ORDER_DELETE_RESET });
    dispatch(listOrders());
  }, [dispatch, successDelete]);
  const deleteHandler = (order) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteOrder(order.id));
    }
  };
  return (
    <div className="bg-light p-2">
      <div className="bg-white m-5 shadow p-5">
        <h1 className="display-4 text-center pb-3">Order List</h1>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <table
            className="
          table table-striped table-hover
          p-5
          table-bordered table-responsive-md
        "
          >
            <thead className="thead-dark">
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Date Placed</th>
                <th scope="col">User</th>
                <th scope="col">Total</th>
                <th scope="col">Paid</th>
                <th scope="col">Delivered</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <OrderRow
                  key={order.id}
                  order={order}
                  orderList={true}
                  deleteHandler={deleteHandler}
                ></OrderRow>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
