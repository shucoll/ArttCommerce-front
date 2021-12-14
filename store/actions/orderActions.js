import axios from '@axios';

import * as types from '../actionTypes/orderTypes';
import * as cartTypes from '../actionTypes/cartTypes';

export const createOrder = (order) => async (dispatch, getState) => {
  const {
    auth: { token },
  } = getState();
  try {
    dispatch({
      type: types.ORDER_CREATE_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post('/api/v1/orders', order, config);

    dispatch({
      type: types.ORDER_CREATE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: cartTypes.CART_CLEAR_ITEMS,
    });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: types.ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
