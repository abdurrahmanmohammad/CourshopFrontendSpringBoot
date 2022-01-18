/** Order API Endpoints */
export const CHECKOUT_ORDER = "http://localhost:8080/orders";
export const MY_ORDER = (orderId) => `http://localhost:8080/orders/mine/${orderId}`;
export const MY_ORDERS = "http://localhost:8080/orders/mine";
export const GET_ORDERS = "http://localhost:8080/orders";
export const GET_ORDER = (orderId) => `http://localhost:8080/orders/${orderId}`;
export const DELETE_ORDER = (orderId) => `http://localhost:8080/orders/${orderId}`;
export const PAY_ORDER = (orderId) => `http://localhost:8080/orders/pay/${orderId}`;
export const DELIVER_ORDER = (orderId) =>
  `http://localhost:8080/orders/deliver/${orderId}`;

/** User API Endpoints */
// export const REGISTER = "https://courshopbackend.herokuapp.com/api/users/signup";
// export const LOGIN = "https://courshopbackend.herokuapp.com/api/users/login";
// export const USER_DETAILS = (userId) => `https://courshopbackend.herokuapp.com/api/users/${userId}`;
// export const MY_USER_DETAILS = `https://courshopbackend.herokuapp.com/api/users/me`;
// export const UPDATE_MY_USER = `https://courshopbackend.herokuapp.com/api/users/updateMe`;
// export const UPDATE_USER = (userId) => `https://courshopbackend.herokuapp.com/api/users/${user.id}`;
// export const GET_USERS = "https://courshopbackend.herokuapp.com/api/users";
// export const DELETE_USER = (userId) => `https://courshopbackend.herokuapp.com/api/users/${userId}`;
export const REGISTER = "http://localhost:8080/auth/signup";
export const LOGIN = "http://localhost:8080/auth/login";
export const USER_DETAILS = (userId) => `http://localhost:8080/users/${userId}`;
export const MY_USER_DETAILS = `http://localhost:8080/users/me`;
export const UPDATE_MY_USER = `http://localhost:8080/users/updateMe`;
export const UPDATE_USER = (userId) => `http://localhost:8080/users/${userId}`;
export const GET_USERS = "http://localhost:8080/users";
export const DELETE_USER = (userId) => `http://localhost:8080/users/${userId}`;

/** Product API Endpoints */
// export const PRODUCT_COVER = (imageCover) =>
//   `https://courshopbackend.herokuapp.com/${imageCover}`
// export const GET_PRODUCTS = 'https://courshopbackend.herokuapp.com/api/products'
// export const PRODUCT_DETAILS = (productId) =>
//   `https://courshopbackend.herokuapp.com/api/products/${productId}`
// export const CREATE_PRODUCT = (productId) =>
//   `https://courshopbackend.herokuapp.com/api/products/${productId}`
// export const DELETE_PRODUCT = (productId) =>
//   `https://courshopbackend.herokuapp.com/api/products/${productId}`

export const PRODUCT_COVER = (imageCover) =>
  `http://localhost:8080/products/images/${imageCover}`;
export const GET_PRODUCTS = "http://localhost:8080/products";
export const PRODUCT_DETAILS = (productId) =>
  `http://localhost:8080/products/${productId}`;
export const CREATE_PRODUCT = "http://localhost:8080/products";
export const UPDATE_PRODUCT = (productId) =>
  `http://localhost:8080/products/${productId}`;
export const DELETE_PRODUCT = (productId) =>
  `http://localhost:8080/products/${productId}`;
