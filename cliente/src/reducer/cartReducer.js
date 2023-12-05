import React from 'react';

export const cartReducer = (state = { cartitem: [] }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartitem: [...state.cartitem, action.payload],
      };

    default:
      return state;
  }
};
