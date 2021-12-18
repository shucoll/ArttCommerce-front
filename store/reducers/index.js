import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { cartReducer } from './cartReducer';
import { orderReducer, myOrderListReducer } from './orderReducer';

const reducers = {
  auth: authReducer,
  cart: cartReducer,
  order: orderReducer,
  userOrders: myOrderListReducer,
};

export default combineReducers(reducers);
