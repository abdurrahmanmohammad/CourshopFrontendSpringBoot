import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsProduct } from '../actions/productActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { addToCart } from '../actions/cartActions'
import Modal from '../components/Modal'
import { Link } from 'react-router-dom'
import { PRODUCT_COVER } from '../constants/apiConstants'

export default function ProductDetails(props) {
  /** *************** Utils *************** */
  const dispatch = useDispatch()
  const productId = props.match.params.id
  /** *************** State variables *************** */
  const [quantity, setQuantity] = useState(1)

  /** *************** Extract data from Redux store *************** */
  // Get product data
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails
  // Get user data: if user logged in, show add to cart button
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin
  const loggedIn = !!userInfo // Check if user logged in - convert object/truify to boolean

  /** *************** Fetch data and render components *************** */
  useEffect(() => {
    dispatch(detailsProduct(productId))
  }, [dispatch, productId])

  /** *************** Submit handler *************** */
  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, quantity, product: product.id }))
  }

  return (
    <div className="bg-light p-2 h-100">
      <div className="bg-white m-5 shadow h-75">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="row mb-5 h-100">
            <img
              src={PRODUCT_COVER(product.imageCover)}
              alt={product.name}
              className="col-md-6 h-100"
            />

            <div className="col-md-6 p-5">
              <h2 className="mb-0">{product.name || 'N/A'}</h2>
              <small>
                Brand:{' '}
                <span className="text-muted">{product.brand || 'N/A'}</span> |
                Category:
                <span className="text-muted">
                  {product.category || 'N/A'}
                </span>{' '}
                |{' '}
                {product.countInStock > 0 ? (
                  <span className="text-success">In Stock</span>
                ) : (
                  <span className="text-danger">Out Of Stock</span>
                )}
              </small>
              <hr />
              <h5 className="my-3 font-weight-bold">
                Price:{' '}
                <span className="text-dark font-weight-normal">
                  ${product.price}
                </span>
              </h5>

              <div className="form-check form-check-inline my-3">
                <label
                  htmlFor="quantity"
                  className="form-check-input font-weight-bold"
                >
                  Quantity:{' '}
                </label>

                {!loggedIn ? (
                  <select className="form-control h-75" disabled>
                    <option>1</option>
                  </select>
                ) : (
                  product.countInStock > 0 && (
                    <select
                      name="quantity"
                      className="form-control h-75"
                      id="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  )
                )}
              </div>

              <h5 className="mb-1">
                Product Description <i className="fas fa-indent"></i>
              </h5>
              <p>{product.description}</p>
              {!loggedIn ? (
                <Link
                  className="btn btn-secondary btn-block align-self-end"
                  to="/login"
                >
                  <i className="fas fa-sign-in-alt" /> Log in
                </Link>
              ) : product.countInStock > 0 ? (
                <button
                  className="btn btn-primary btn-block align-self-end"
                  onClick={addToCartHandler}
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  <i className="fas fa-cart-plus" /> Add to cart
                </button>
              ) : (
                <button
                  className="btn btn-primary btn-block align-self-end"
                  disabled
                >
                  <i className="fas fa-cart-plus" /> Out of Stock
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      <Modal head={`Item added to cart!`} body={'Click cart to view items!'} />
    </div>
  )
}
