import { toast } from 'react-toastify';
import * as types from '../actionTypes/authTypes';
import { updateObject } from '../utility';

const initialState = {
  userInfo: null,
  token: null,
  loading: false,
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    userInfo: action.payload.data,
    token: action.payload.token,

    loading: false,
  });
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN_REQUEST:
      return updateObject(state, { loading: true });

    case types.USER_LOGIN_SUCCESS:
      return authSuccess(state, action);

    case types.USER_LOGIN_FAIL:
      toast.error(action.payload);
      return updateObject(state, { loading: false });

    case types.USER_LOGOUT:
      return updateObject(state, { token: null, userInfo: null });

    case types.USER_SIGNUP_REQUEST:
      return updateObject(state, { loading: true });

    case types.USER_SIGNUP_SUCCESS:
      toast.success('Signup successful! Please login to continue');
      return updateObject(state, { loading: false });

    case types.USER_SIGNUP_FAIL:
      toast.error(action.payload);
      return updateObject(state, { loading: false });

    case types.USER_UPDATE_REQUEST:
      return updateObject(state, { loading: true });

    case types.USER_UPDATE_SUCCESS:
      toast.success('Info Updated');
      return updateObject(state, {
        loading: false,
        userInfo: action.payload.data,
      });

    case types.USER_UPDATE_FAIL:
      toast.error(action.payload);
      return updateObject(state, { loading: false });

    case types.USER_PASSWORD_UPDATE_REQUEST:
      return updateObject(state, { loading: true });

    case types.USER_PASSWORD_UPDATE_SUCCESS:
      toast.success('Password Changed');
      return updateObject(state, { loading: false });

    case types.USER_PASSWORD_UPDATE_FAIL:
      toast.error(action.payload);
      return updateObject(state, { loading: false });

    // case types.CLEAR_AUTH_ERROR:
    //   return updateObject(state, { error: null });

    default:
      return state;
  }
};
