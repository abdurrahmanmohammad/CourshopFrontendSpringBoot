/** Order API Endpoints */
export const CHECKOUT_ORDER = "http://supplyshop-env-1.eba-f33cdckc.us-west-1.elasticbeanstalk.com/orders";
export const MY_ORDER = (orderId) => `http://supplyshop-env-1.eba-f33cdckc.us-west-1.elasticbeanstalk.com/orders/mine/${orderId}`;
export const MY_ORDERS = "http://supplyshop-env-1.eba-f33cdckc.us-west-1.elasticbeanstalk.com/orders/mine";
export const GET_ORDERS = "http://supplyshop-env-1.eba-f33cdckc.us-west-1.elasticbeanstalk.com/orders";
export const GET_ORDER = (orderId) => `http://supplyshop-env-1.eba-f33cdckc.us-west-1.elasticbeanstalk.com/orders/${orderId}`;
export const DELETE_ORDER = (orderId) => `http://supplyshop-env-1.eba-f33cdckc.us-west-1.elasticbeanstalk.com/orders/${orderId}`;
export const PAY_ORDER = (orderId) => `http://supplyshop-env-1.eba-f33cdckc.us-west-1.elasticbeanstalk.com/orders/pay/${orderId}`;
export const DELIVER_ORDER = (orderId) =>
  `http://supplyshop-env-1.eba-f33cdckc.us-west-1.elasticbeanstalk.com/orders/deliver/${orderId}`;

/** User API Endpoints */
// export const REGISTER = "https://courshopbackend.herokuapp.com/api/users/signup";
// export const LOGIN = "https://courshopbackend.herokuapp.com/api/users/login";
// export const USER_DETAILS = (userId) => `https://courshopbackend.herokuapp.com/api/users/${userId}`;
// export const MY_USER_DETAILS = `https://courshopbackend.herokuapp.com/api/users/me`;
// export const UPDATE_MY_USER = `https://courshopbackend.herokuapp.com/api/users/updateMe`;
// export const UPDATE_USER = (userId) => `https://courshopbackend.herokuapp.com/api/users/${user.id}`;
// export const GET_USERS = "https://courshopbackend.herokuapp.com/api/users";
// export const DELETE_USER = (userId) => `https://courshopbackend.herokuapp.com/api/users/${userId}`;
export const REGISTER = "http://supplyshop-env-1.eba-f33cdckc.us-west-1.elasticbeanstalk.com/auth/signup";
export const LOGIN = "http://supplyshop-env-1.eba-f33cdckc.us-west-1.elasticbeanstalk.com/auth/login";
export const USER_DETAILS = (userId) => `http://supplyshop-env-1.eba-f33cdckc.us-west-1.elasticbeanstalk.com/users/${userId}`;
export const MY_USER_DETAILS = `http://supplyshop-env-1.eba-f33cdckc.us-west-1.elasticbeanstalk.com/users/me`;
export const UPDATE_MY_USER = `http://supplyshop-env-1.eba-f33cdckc.us-west-1.elasticbeanstalk.com/users/updateMe`;
export const UPDATE_USER = (userId) => `http://supplyshop-env-1.eba-f33cdckc.us-west-1.elasticbeanstalk.com/users/${userId}`;
export const GET_USERS = "http://supplyshop-env-1.eba-f33cdckc.us-west-1.elasticbeanstalk.com/users";
export const DELETE_USER = (userId) => `http://supplyshop-env-1.eba-f33cdckc.us-west-1.elasticbeanstalk.com/users/${userId}`;

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
  `http://supplyshop-env-1.eba-f33cdckc.us-west-1.elasticbeanstalk.com/products/images/${imageCover}`;
export const GET_PRODUCTS = "http://supplyshop-env-1.eba-f33cdckc.us-west-1.elasticbeanstalk.com/products";
export const PRODUCT_DETAILS = (productId) =>
  `http://supplyshop-env-1.eba-f33cdckc.us-west-1.elasticbeanstalk.com/products/${productId}`;
export const CREATE_PRODUCT = "http://supplyshop-env-1.eba-f33cdckc.us-west-1.elasticbeanstalk.com/products";
export const UPDATE_PRODUCT = (productId) =>
  `http://supplyshop-env-1.eba-f33cdckc.us-west-1.elasticbeanstalk.com/products/${productId}`;
export const DELETE_PRODUCT = (productId) =>
  `http://supplyshop-env-1.eba-f33cdckc.us-west-1.elasticbeanstalk.com/products/${productId}`;
