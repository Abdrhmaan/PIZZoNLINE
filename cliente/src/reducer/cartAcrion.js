import React from 'react';
import { cartReducer } from './cartReducer';
export const cartAction = (pizza, quantity, varient) => (dispatch) => {
  // Corrected the variable name from 'varients' to 'variants'
  const cartitems = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    varient: varient, // Make sure this matches your data structure
    quantity: quantity,
    prices: pizza.prices,
    price: pizza.prices[0][varient] * quantity, // Adjusted indexing for prices
  };

  // Ensure the action type matches the one used in your reducer
  dispatch({ type: 'ADD_TO_CART', payload : cartitems });

};
