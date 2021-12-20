import * as types from '../actionTypes/orderTypes';
import { toast } from 'react-toastify';
import { updateObject } from '../utility';

const orderInitialState = {
  orderDetails: null,
  loading: false,
};

const myOrderListInitialState = {
  orderList: null,
  loading: false,
};

export const orderReducer = (state = orderInitialState, action) => {
  switch (action.type) {
    case types.ORDER_CREATE_REQUEST:
      return updateObject(state, { loading: true });

    case types.ORDER_CREATE_SUCCESS:
      return updateObject(state, {
        orderDetails: action.payload,
        loading: false,
      });

    case types.ORDER_CREATE_FAIL:
      toast.error(action.payload);
      return updateObject(state, { loading: false });

    case types.CLEAR_ORDER_DETAILS:
      return updateObject(state, { orderDetails: null });

    default:
      return state;
  }
};

export const myOrderListReducer = (state = myOrderListInitialState, action) => {
  switch (action.type) {
    case types.USER_ORDERS_REQUEST:
      return updateObject(state, { loading: true });

    case types.USER_ORDERS_SUCCESS:
      return updateObject(state, {
        orderList: action.payload,
        loading: false,
      });

    case types.USER_ORDERS_FAIL:
      toast.error(action.payload);
      return updateObject(state, { error: action.payload, loading: false });

    default:
      return state;
  }
};
