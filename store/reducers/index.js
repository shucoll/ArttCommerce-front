import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { cartReducer } from './cartReducer';
import { productListReducer } from './productReducer';

const reducers = {
  auth: authReducer,
  cart: cartReducer,
  productList: productListReducer,
};

export default combineReducers(reducers);
