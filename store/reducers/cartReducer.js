import * as types from '../actionTypes/cartTypes';
import { updateObject } from '../utility';

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CART_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.id === item.id);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existItem.id ? item : x
          ),
        };
      } else {
        return updateObject(state, { cartItems: [...state.cartItems, item] });
      }

    case types.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };

    case types.CART_CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};
