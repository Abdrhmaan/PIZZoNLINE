import React from 'react';

const pizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_PIZZA_REQUEST':
      return {
        ...state,
        loading : true
      };

    case 'GET_PIZZA_SUCCESS':
      return {
        pizza: action.payload,
        loading : false
      };

    case 'GET_PIZZA_FAILED':
      return {
        error: action.payload,
        loading : false
      };

    default:
      return state;
  }
};

export default pizzaReducer;
