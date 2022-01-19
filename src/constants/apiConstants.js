/** Order API Endpoints */
export const CHECKOUT_ORDER = "https://supplybackend.ee-cognizantacademy.com/orders";
export const MY_ORDER = (orderId) => `https://supplybackend.ee-cognizantacademy.com/orders/mine/${orderId}`;
export const MY_ORDERS = "https://supplybackend.ee-cognizantacademy.com/orders/mine";
export const GET_ORDERS = "https://supplybackend.ee-cognizantacademy.com/orders";
export const GET_ORDER = (orderId) => `https://supplybackend.ee-cognizantacademy.com/orders/${orderId}`;
export const DELETE_ORDER = (orderId) => `https://supplybackend.ee-cognizantacademy.com/orders/${orderId}`;
export const PAY_ORDER = (orderId) => `https://supplybackend.ee-cognizantacademy.com/orders/pay/${orderId}`;
export const DELIVER_ORDER = (orderId) =>
  `https://supplybackend.ee-cognizantacademy.com/orders/deliver/${orderId}`;

/** User API Endpoints */
// export const REGISTER = "https://courshopbackend.herokuapp.com/api/users/signup";
// export const LOGIN = "https://courshopbackend.herokuapp.com/api/users/login";
// export const USER_DETAILS = (userId) => `https://courshopbackend.herokuapp.com/api/users/${userId}`;
// export const MY_USER_DETAILS = `https://courshopbackend.herokuapp.com/api/users/me`;
// export const UPDATE_MY_USER = `https://courshopbackend.herokuapp.com/api/users/updateMe`;
// export const UPDATE_USER = (userId) => `https://courshopbackend.herokuapp.com/api/users/${user.id}`;
// export const GET_USERS = "https://courshopbackend.herokuapp.com/api/users";
// export const DELETE_USER = (userId) => `https://courshopbackend.herokuapp.com/api/users/${userId}`;
export const REGISTER = "https://supplybackend.ee-cognizantacademy.com/auth/signup";
export const LOGIN = "https://supplybackend.ee-cognizantacademy.com/auth/login";
export const USER_DETAILS = (userId) => `https://supplybackend.ee-cognizantacademy.com/users/${userId}`;
export const MY_USER_DETAILS = `https://supplybackend.ee-cognizantacademy.com/users/me`;
export const UPDATE_MY_USER = `https://supplybackend.ee-cognizantacademy.com/users/updateMe`;
export const UPDATE_USER = (userId) => `https://supplybackend.ee-cognizantacademy.com/users/${userId}`;
export const GET_USERS = "https://supplybackend.ee-cognizantacademy.com/users";
export const DELETE_USER = (userId) => `https://supplybackend.ee-cognizantacademy.com/users/${userId}`;

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
  `https://supplybackend.ee-cognizantacademy.com/products/images/${imageCover}`;
export const GET_PRODUCTS = "https://supplybackend.ee-cognizantacademy.com/products";
export const PRODUCT_DETAILS = (productId) =>
  `https://supplybackend.ee-cognizantacademy.com/products/${productId}`;
export const CREATE_PRODUCT = "https://supplybackend.ee-cognizantacademy.com/products";
export const UPDATE_PRODUCT = (productId) =>
  `https://supplybackend.ee-cognizantacademy.com/products/${productId}`;
export const DELETE_PRODUCT = (productId) =>
  `https://supplybackend.ee-cognizantacademy.com/products/${productId}`;
