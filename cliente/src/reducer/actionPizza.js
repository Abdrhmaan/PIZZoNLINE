import React from 'react';
import axios from 'axios';

export const actionPizza = () => async (dispatch) => {
  dispatch({ type: 'GET_PIZZA_REQUEST' });

  try {
    const res = await axios.get('http://localhost:30000/api/pizz', { timeout: 5000 });

    console.log(res.data); // Log the data received from the server
    dispatch({ type: 'GET_PIZZA_SUCCESS', payload: res.data });
  } catch (e) {
    console.error(e);
    dispatch({ type: 'GET_PIZZA_FAILED', payload: e.message });
  }
};
