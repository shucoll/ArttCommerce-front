import * as types from '../actionTypes/authTypes';
import { updateObject } from '../utility';

const initialState = {
  userInfo: null,
  error: null,
  loading: false,
};

const authSuccess = (state, action) => {
  //console.log(action.payload);
  return updateObject(state, {
    userInfo: action.payload.data.user,
    error: null,
    loading: false,
  });
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN_REQUEST:
      return updateObject(state, { error: null, loading: true });

    case types.USER_LOGIN_SUCCESS:
      return authSuccess(state, action);

    case types.USER_LOGIN_FAIL:
      return updateObject(state, { error: action.payload, loading: false });

    case types.USER_LOGOUT:
      return updateObject(state, { token: null, userInfo: null });

    default:
      return state;
  }
};
