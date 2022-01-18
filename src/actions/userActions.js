import Axios from 'axios'
import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from '../constants/userConstants'

import {
  REGISTER,
  LOGIN,
  USER_DETAILS,
  MY_USER_DETAILS,
  UPDATE_MY_USER,
  UPDATE_USER,
  GET_USERS,
  DELETE_USER,
} from '../constants/apiConstants'

export const register = (name, email, password, passwordConfirm) => async (
  dispatch,
) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password } })
  try {
    const { data } = await Axios.post(REGISTER, {
      name,
      email,
      password,
      passwordConfirm,
    })

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } })
  try {
    const { data } = await Axios.post(LOGIN, { email, password })
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  localStorage.removeItem('cartItems')
  localStorage.removeItem('shippingAddress')
  dispatch({ type: USER_SIGNOUT })
  document.location.href = '/login'
}

export const detailsUser = (userId) => async (dispatch, getState) => {
  dispatch({ type: USER_DETAILS_REQUEST, payload: userId })
  const {
    userSignin: { userInfo },
  } = getState()

  try {
    const { data } = await Axios.get(USER_DETAILS(userId), {
      headers: { Authorization: userInfo.token },
    })
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({ type: USER_DETAILS_FAIL, payload: message })
  }
}

export const detailsCurrentUser = (userId) => async (dispatch, getState) => {
  dispatch({ type: USER_DETAILS_REQUEST, payload: userId })
  const {
    userSignin: { userInfo },
  } = getState()
  try {
    const { data } = await Axios.get(MY_USER_DETAILS, {
      headers: { Authorization: userInfo.token },
    })
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({ type: USER_DETAILS_FAIL, payload: message })
  }
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
  dispatch({ type: USER_UPDATE_PROFILE_REQUEST, payload: user })
  const {
    userSignin: { userInfo },
  } = getState()
  try {
    const { data } = await Axios.patch(UPDATE_MY_USER, user, {
      headers: { Authorization: userInfo.token },
    })
    
    const currentUser = { ...data, token: userInfo.token }
    dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: currentUser })
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: currentUser })
    localStorage.setItem('userInfo', JSON.stringify(currentUser))
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({ type: USER_UPDATE_PROFILE_FAIL, payload: message })
  }
}
export const updateUser = (user) => async (dispatch, getState) => {
  dispatch({ type: USER_UPDATE_PROFILE_REQUEST, payload: user })
  const {
    userSignin: { userInfo },
  } = getState()

  try {
    const { data } = await Axios.patch(UPDATE_USER(user.id), user, {
      headers: { Authorization: userInfo.token },
    })

    dispatch({ type: USER_UPDATE_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({ type: USER_UPDATE_FAIL, payload: message })
  }
}
export const listUsers = () => async (dispatch, getState) => {
  dispatch({ type: USER_LIST_REQUEST })
  try {
    const {
      userSignin: { userInfo },
    } = getState()
    const { data } = await Axios.get(GET_USERS, {
      headers: { Authorization: userInfo.token },
    })
    dispatch({ type: USER_LIST_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({ type: USER_LIST_FAIL, payload: message })
  }
}
export const deleteUser = (userId) => async (dispatch, getState) => {
  dispatch({ type: USER_DELETE_REQUEST, payload: userId })
  const {
    userSignin: { userInfo },
  } = getState()

  try {
    const { data } = await Axios.delete(DELETE_USER(userId), {
      headers: { Authorization: userInfo.token },
    })
    dispatch({ type: USER_DELETE_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({ type: USER_DELETE_FAIL, payload: message })
  }
}
