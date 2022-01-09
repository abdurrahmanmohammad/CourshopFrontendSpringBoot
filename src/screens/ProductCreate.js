import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";

export default function ProductCreate(props) {
  /** *************** Utils *************** */
  const dispatch = useDispatch(); // Reference of dispatch fx from Redux store to dispatch actions

  /** *************** State variables *************** */
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [imageCover, setImageCover] = useState("");

  /** *************** Extract data from Redux store *************** */
  const productCreate = useSelector((state) => state.productCreate);
  const { loading, error, success } = productCreate;

  /** *************** Fetch data and render components *************** */
  useEffect(() => {
    if (success) {
      dispatch({ type: PRODUCT_CREATE_RESET }); // Set product update to default state
      props.history.push("/productlist"); // Push to product list after successful create
    }
    // Update variable states
    setName(name);
    setPrice(price);
    setCategory(category);
    setCountInStock(countInStock);
    setBrand(brand);
    setDescription(description);
  }, [
    success,
    props.history,
    name,
    price,
    category,
    countInStock,
    brand,
    description,
  ]);

  /** *************** Optional image upload *************** */
  const uploadFileHandler = async (e) => {
    document.getElementById("filename").innerHTML = (
      <span>
        <i class="fas fa-spinner fa-spin" />
        Uploading ...
      </span>
    ); // Set uploading icon
    const file = e.target.files[0]; // Retrieve uploaded image file
    setImageCover(file); // Set image cover to file
    document.getElementById("filename").innerHTML = file.name; // Show filename
  };

  /** *************** Submit handler *************** */
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent the default form submit action
    // Create an empty form data object to contain updated data and image cover
    const formData = new FormData();
    // Extract variable values from state and add to form data object
    formData.set("name", name);
    formData.set("price", price);
    formData.set("category", category);
    formData.set("countInStock", countInStock);
    formData.set("brand", brand);
    formData.set("description", description);
    formData.set("imageCover", imageCover); // Add image to form data (want to submit along other data)

    dispatch(createProduct(formData)); // Dispatch create product action
  };

  return (
    <div className="bg-light p-2">
      <div className="bg-white mx-auto mt-5 shadow p-5 w-50">
        <div className="container px-5">
          <h1 className="display-4 text-center pb-3">Create Product</h1>

          {loading ? (
            <LoadingBox />
          ) : (
            <form onSubmit={submitHandler}>
              {error && <MessageBox message={error} />}
              <div className="input-group mb-3 py-1">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon-name">
                    <i className="fas fa-user" />
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
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="input-group mb-3 py-1">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon-brand">
                    <i className="fas fa-tag" />
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
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div className="input-group mb-3 py-1">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon-category">
                    <i className="fas fa-list" />
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
                  min="0"
                  required
                  className="form-control"
                  placeholder="Count In Stock"
                  aria-label="Count In Stock"
                  aria-describedby="basic-addon-stock"
                  id="countInStock"
                  onChange={(e) => setCountInStock(e.target.value)}
                />
              </div>

              <div className="input-group mb-3 py-1">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="inputGroupFileAddonPicture"
                  >
                    <i className="fas fa-image" />
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
                    id="filename"
                  >
                    Upload Picture
                  </label>
                </div>
              </div>

              <div className="input-group pb-3 py-1">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-indent" />
                  </span>
                </div>
                <textarea
                  className="form-control"
                  placeholder="Product Description"
                  aria-label="Product Description"
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-secondary btn-block corners"
              >
                Create
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
