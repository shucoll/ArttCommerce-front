import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { cartReducer } from './cartReducer';
import { orderReducer } from './orderReducer';
// import { productListReducer } from './productReducer';

const reducers = {
  auth: authReducer,
  cart: cartReducer,
  order: orderReducer,
  // productList: productListReducer,
};

export default combineReducers(reducers);
