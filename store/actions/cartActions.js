import * as types from '../actionTypes/cartTypes';

export const addToCart = (item, qty) => async (dispatch, getState) => {
  // const { data } = await axios.get(`/api/products/${id}`);

  //items to be shown/available in the cart
  dispatch({
    type: types.CART_ADD_ITEM,
    payload: {
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      stock: item.stock,
      qty,
    },
  });

  //also saving the cart to local storage. We need to stringify as we can only store strings in local storage. Then later when we take the data out we need to parse it
  // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: types.CART_REMOVE_ITEM,
    payload: id,
  });

  // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
};
