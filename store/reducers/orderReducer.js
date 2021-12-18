import * as types from '../actionTypes/orderTypes';
import { updateObject } from '../utility';

const orderInitialState = {
  orderDetails: null,
  error: null,
  loading: false,
};

const myOrderListInitialState = {
  orderList: null,
  error: null,
  loading: false,
};

export const orderReducer = (state = orderInitialState, action) => {
  switch (action.type) {
    case types.ORDER_CREATE_REQUEST:
      return updateObject(state, { error: null, loading: true });

    case types.ORDER_CREATE_SUCCESS:
      return updateObject(state, {
        orderDetails: action.payload,
        error: null,
        loading: false,
      });

    case types.ORDER_CREATE_FAIL:
      return updateObject(state, { error: action.payload, loading: false });

    case types.CLEAR_ORDER_ERROR:
      return updateObject(state, { error: null });

    case types.CLEAR_ORDER_DETAILS:
      return updateObject(state, { orderDetails: null });

    default:
      return state;
  }
};

export const myOrderListReducer = (state = myOrderListInitialState, action) => {
  switch (action.type) {
    case types.USER_ORDERS_REQUEST:
      return updateObject(state, { error: null, loading: true });

    case types.USER_ORDERS_SUCCESS:
      return updateObject(state, {
        orderList: action.payload,
        error: null,
        loading: false,
      });

    case types.USER_ORDERS_FAIL:
      return updateObject(state, { error: action.payload, loading: false });

    case types.CLEAR_USER_ORDERS_DETAILS:
      return updateObject(state, { error: null });

    case types.CLEAR_USER_ORDERS_ERROR:
      return updateObject(state, { orderDetails: null });

    default:
      return state;
  }
};
