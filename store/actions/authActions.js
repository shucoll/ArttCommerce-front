import axios from '@axios';

import * as types from '../actionTypes/authTypes';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: types.USER_LOGIN_REQUEST,
    });

    //necessary to do this to send data to backend
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // };

    //here we get the user info and token if success and an error if anything is invalid
    const { data } = await axios.post(
      '/api/v1/users/login',
      { email, password },
      config
    );

    // console.log(data);

    dispatch({
      type: types.USER_LOGIN_SUCCESS,
      payload: data,
    });

    // //to automatically login user when visiting the site again
    // localStorage.setItem('userInfo', JSON.stringify(data.data.user));
    // localStorage.setItem('loginToken', JSON.stringify(data.token));
  } catch (error) {
    // console.log(error.response.data.message);
    dispatch({
      type: types.USER_LOGIN_FAIL,
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
