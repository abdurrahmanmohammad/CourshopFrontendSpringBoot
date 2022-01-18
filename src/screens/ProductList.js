import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, listProducts } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {
  PRODUCT_CREATE_RESET,
  PRODUCT_DELETE_RESET,
} from "../constants/productConstants";
import ProductRow from "../components/ProductRow";
import { Link } from "react-router-dom";

export default function ProductList(props) {
  // Get Product List
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  // Product Delete
  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successDelete) dispatch({ type: PRODUCT_DELETE_RESET });
    console.log(products);
    dispatch(listProducts());
  }, [dispatch, props.history, successDelete]);

  const deleteHandler = (product) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteProduct(product.id));
    }
  };

  return (
    <div className="bg-light p-2">
      <div className="bg-white m-5 shadow p-5">
        <h1 className="display-4 text-center pb-3">Product List</h1>
        {loadingDelete && <LoadingBox></LoadingBox>}
        {errorDelete && <MessageBox message={errorDelete} />}

        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox message={error} />
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
                <th scope="col">Product ID</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
                <th scope="col">Category</th>
                <th scope="col">Brand</th>
                <th scope="col">
                  Actions
                  <Link
                    className="btn btn-light ml-2 rounded-circle btn-sm"
                    to="/createproduct"
                  >
                    <i className="fas fa-plus" />
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <ProductRow
                  product={product}
                  key={product.id}
                  deleteHandler={deleteHandler}
                ></ProductRow>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
