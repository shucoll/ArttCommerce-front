import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { cartReducer } from './cartReducer';

const reducers = {
  auth: authReducer,
  cart: cartReducer,
};

export default combineReducers(reducers);