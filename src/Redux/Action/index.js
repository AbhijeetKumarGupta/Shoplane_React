export const getProducts = (payload) => ({
  type: "GET_PROD",
  payload,
});

export const setCurrentProduct = (payload) => ({
  type: "SET_PROD",
  payload,
});

export const addToCart = (payload) => ({
  type: "ADD_PROD",
  payload,
});

export const clearCartAfterOrder = (payload) => ({
  type: "ORDER_PLACED",
  payload,
});
