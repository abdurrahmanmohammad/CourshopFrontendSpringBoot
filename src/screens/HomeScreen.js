import React, { useEffect } from "react";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Categories from "../components/Categories";

export default function Home() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="bg-light p-3">
      <div className="bg-white m-5 p-5 shadow">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox message={error} />
        ) : (
          <div className="row mb-5">
            {/**<!-- Categories-->*/}
            <Categories />
            {/**<!-- Cards-->*/}
            <div className="col-md-9">
              <div className="row">
                {/** <!-- Product -->*/}
                {products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
