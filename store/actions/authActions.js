import axios from '@axios';
import * as types from '../actionTypes/authTypes';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: types.USER_LOGIN_REQUEST,
    });

    const { data } = await axios.post('/api/v1/users/login', {
      email,
      password,
    });

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

export const updateMe = (formData) => async (dispatch, getState) => {
  const { name } = formData;

  const {
    auth: { token },
  } = getState();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    dispatch({
      type: types.USER_UPDATE_REQUEST,
    });

    const { data } = await axios.post(
      '/api/v1/users/updateMe',
      {
        name,
      },
      config
    );

    dispatch({
      type: types.USER_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateMyPassword = (formData) => async (dispatch, getState) => {
  const { passwordCurrent, password, passwordConfirm } = formData;

  const {
    auth: { token },
  } = getState();

  try {
    dispatch({
      type: types.USER_PASSWORD_UPDATE_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    await axios.post(
      '/api/v1/users/updateMyPassword',
      {
        passwordCurrent,
        password,
        passwordConfirm,
      },
      config
    );

    dispatch({
      type: types.USER_PASSWORD_UPDATE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: types.USER_PASSWORD_UPDATE_FAIL,
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
