import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrderMine } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import OrderRow from "../components/OrderRow";

export default function OrderHistory(props) {
  const orderMineList = useSelector((state) => state.orderMineList);
  const { loading, error, orders } = orderMineList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrderMine());
  }, [dispatch]);

  return (
    <div className="bg-light p-2">
      <div className="bg-white m-5 shadow p-5">
        <h1 className="display-4 text-center pb-3">Order History</h1>
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
                <OrderRow key={order._id} order={order}></OrderRow>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
