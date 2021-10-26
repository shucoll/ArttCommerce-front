import axios from '@axios';

import * as types from '../actionTypes/authTypes';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: types.USER_LOGIN_REQUEST,
    });

    const { data } = await axios.post(
      '/api/v1/users/login',
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: types.USER_LOGIN_SUCCESS,
      payload: data,
    });

    // //to automatically login user when visiting the site again
    // localStorage.setItem('userInfo', JSON.stringify(data.data.user));
    // localStorage.setItem('loginToken', JSON.stringify(data.token));
  } catch (error) {
    dispatch({
      type: types.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signup = (formData) => async (dispatch) => {
  const { name, email, password, passwordConfirm } = formData;
  try {
    dispatch({
      type: types.USER_SIGNUP_REQUEST,
    });

    const { data } = await axios.post('/api/v1/users/signup', {
      name,
      email,
      password,
      passwordConfirm,
    });

    dispatch({
      type: types.USER_SIGNUP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.USER_SIGNUP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  // localStorage.removeItem('userInfo');
  // localStorage.removeItem('loginToken');
  dispatch({ type: types.USER_LOGOUT });
  // document.location.href = '/';
};
