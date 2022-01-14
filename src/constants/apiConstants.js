/** Order API Endpoints */
export const CHECKOUT_ORDER =
  'https://courshopbackend.herokuapp.com/api/orders/checkout'
export const MY_ORDER = (orderId) =>
  `https://courshopbackend.herokuapp.com/api/orders/mine/${orderId}`
export const MY_ORDERS = 'https://courshopbackend.herokuapp.com/api/orders/mine'
export const GET_ORDER = (orderId) =>
  `https://courshopbackend.herokuapp.com/api/orders/${orderId}`
export const PAY_ORDER = (orderId) =>
  `https://courshopbackend.herokuapp.com/api/orders/${orderId}/pay`
export const LIST_ORDERS = 'https://courshopbackend.herokuapp.com/api/orders'
export const DELETE_ORDER = (orderId) =>
  `https://courshopbackend.herokuapp.com/api/orders/${orderId}`
export const DELIVER_ORDER = (orderId) =>
  `https://courshopbackend.herokuapp.com/api/orders/${orderId}/deliver`

/** User API Endpoints */
// export const REGISTER = "https://courshopbackend.herokuapp.com/api/users/signup";
// export const LOGIN = "https://courshopbackend.herokuapp.com/api/users/login";
// export const USER_DETAILS = (userId) => `https://courshopbackend.herokuapp.com/api/users/${userId}`;
// export const MY_USER_DETAILS = `https://courshopbackend.herokuapp.com/api/users/me`;
// export const UPDATE_MY_USER = `https://courshopbackend.herokuapp.com/api/users/updateMe`;
// export const UPDATE_USER = (userId) => `https://courshopbackend.herokuapp.com/api/users/${user._id}`;
// export const GET_USERS = "https://courshopbackend.herokuapp.com/api/users";
// export const DELETE_USER = (userId) => `https://courshopbackend.herokuapp.com/api/users/${userId}`;
export const REGISTER = 'http://localhost:8080/auth/signup'
export const LOGIN = 'http://localhost:8080/auth/login'
export const USER_DETAILS = (userId) => `http://localhost:8080/users/${userId}`
export const MY_USER_DETAILS = `http://localhost:8080/users/me`
export const UPDATE_MY_USER = `http://localhost:8080/users/updateMe`
export const UPDATE_USER = (userId) => `http://localhost:8080/users/${userId}`
export const GET_USERS = 'http://localhost:8080/users'
export const DELETE_USER = (userId) => `http://localhost:8080/users/${userId}`

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
  `http://localhost:8080/products/${imageCover}`
export const GET_PRODUCTS = 'http://localhost:8080/products'
export const PRODUCT_DETAILS = (productId) =>
  `http://localhost:8080/products/${productId}`
export const CREATE_PRODUCT = 'http://localhost:8080/products'
export const UPDATE_PRODUCT = (productId) =>
  `http://localhost:8080/products/${productId}`
export const DELETE_PRODUCT = (productId) =>
  `http://localhost:8080products/${productId}`
