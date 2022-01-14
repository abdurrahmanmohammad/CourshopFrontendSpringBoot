import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsProduct, updateProduct } from '../actions/productActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'

export default function ProductEdit(props) {
  const productId = props.match.params.id
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [imageCover, setImageCover] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState('')
  const [brand, setBrand] = useState('')
  const [description, setDescription] = useState('')
  const bodyFormData = new FormData()

  /** ******************** Start: Extract data from Redux store state ******************** */
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails
  /** ******************** End: Extract data from Redux store state ******************** */

  const productUpdate = useSelector((state) => state.productUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(detailsProduct(productId))
  }, [])

  useEffect(() => {
    if (successUpdate) {
      props.history.push('/productlist')
    }
    if (product) {
      setName(product.name)
      setPrice(product.price)
      setImageCover(product.imageCover)
      setCategory(product.category)
      setCountInStock(product.countInStock)
      setBrand(product.brand)
      setDescription(product.description)
    }
  }, [product, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    // TODO: dispatch update product
    bodyFormData.set('id', productId)
    bodyFormData.set('name', name)
    bodyFormData.set('price', price)
    bodyFormData.set('category', category)
    bodyFormData.set('countInStock', countInStock)
    bodyFormData.set('brand', brand)
    bodyFormData.set('description', description)

    dispatch(updateProduct(bodyFormData))
  }
  const [loadingUpload, setLoadingUpload] = useState(false)
  const [errorUpload, setErrorUpload] = useState('')

  const userSignin = useSelector((state) => state.userSignin)

  const { userInfo } = userSignin

  const uploadFileHandler = async (e) => {
    // Optional image upload
    setLoadingUpload(true)

    // Retrieve uploaded image
    const file = e.target.files[0]

    // Add image to form data
    bodyFormData.set('image', file)

    // setImageCover(data);
    setLoadingUpload(false)

    // Set image label to filename
    document.getElementById('imageLabel').innerHTML = file.name
  }
  return (
    <div className="bg-light p-2">
      <div className="bg-white mx-auto mt-5 shadow p-5 w-50">
        <div className="container px-5">
          <h1 className="display-4 text-center pb-3">Edit Product</h1>
          {loadingUpdate && <LoadingBox></LoadingBox>}
          {errorUpdate && (
            <MessageBox variant="danger">{errorUpdate}</MessageBox>
          )}
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <form onSubmit={submitHandler}>
              <div className="input-group mb-3 py-1">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon-name">
                    <i className="fas fa-id-card"></i>
                  </span>
                </div>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="ID"
                  aria-label="ID"
                  aria-describedby="basic-addon1-name"
                  value={productId}
                  readOnly
                />
              </div>

              <div className="input-group mb-3 py-1">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon-name">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Name"
                  aria-label="Name"
                  aria-describedby="basic-addon1-name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="input-group mb-3 py-1">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon-brand">
                    <i className="fas fa-tag"></i>
                  </span>
                </div>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Brand"
                  aria-label="Brand"
                  aria-describedby="basic-addon-brand"
                  id="brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>

              <div className="input-group mb-3 py-1">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon-price">
                    $
                  </span>
                </div>
                <input
                  type="number"
                  required
                  min="0.01"
                  step="0.01"
                  className="form-control"
                  placeholder="Price"
                  aria-label="Price"
                  aria-describedby="basic-addon-price"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div className="input-group mb-3 py-1">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon-category">
                    <i className="fas fa-list"></i>
                  </span>
                </div>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Category"
                  aria-label="Category"
                  aria-describedby="basic-addon-category"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>

              <div className="input-group mb-3 py-1">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon-stock">
                    #
                  </span>
                </div>
                <input
                  type="number"
                  required
                  min="0"
                  className="form-control"
                  placeholder="Count In Stock"
                  aria-label="Count In Stock"
                  aria-describedby="basic-addon-stock"
                  id="countInStock"
                  value={countInStock}
                  onChange={(e) => setCountInStock(e.target.value)}
                />
              </div>

              <div className="input-group mb-3 py-1">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="inputGroupFileAddonPicture"
                  >
                    <i className="fas fa-image"></i>
                  </span>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    required
                    className="custom-file-input"
                    aria-describedby="inputGroupFileAddon01"
                    id="imageFile"
                    onChange={uploadFileHandler}
                  />
                  <label
                    className="custom-file-label text-muted"
                    htmlFor="inputGroupFileAddonPicture"
                    id="imageLabel"
                  >
                    Upload Picture
                  </label>
                </div>
                {loadingUpload && <LoadingBox></LoadingBox>}
                {errorUpload && (
                  <MessageBox variant="danger">{errorUpload}</MessageBox>
                )}
              </div>

              <div className="input-group pb-3 py-1">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-indent"></i>
                  </span>
                </div>
                <textarea
                  className="form-control"
                  required
                  placeholder="Product Description"
                  aria-label="Product Description"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-secondary btn-block corners"
              >
                Update
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
