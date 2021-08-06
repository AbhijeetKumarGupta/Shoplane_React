const initialState = {
  products: [],
  currentProd: [],
  cart: [],
  prodCount: [],
};

const setState = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_PROD":
      return { ...state, products: payload };
    case "SET_PROD":
      return { ...state, currentProd: payload };
    case "ADD_PROD":
      var cc = state.cart.length ? state.cart : [];
      var pc = state.prodCount;
      if (cc.length === 0) {
        pc.push(1);
        return { ...state, cart: [...state.cart, payload] };
      } else {
        for (var i = 0; i < cc.length; i++) {
          if (cc[i].id === payload.id) {
            pc[i]++;
            break;
          } else if (i === cc.length - 1) {
            pc.push(1);
            return { ...state, cart: [...state.cart, payload] };
          }
        }
      }
      return { ...state, cart: [...state.cart] };
    case "ORDER_PLACED":
      state.prodCount = [];
      return { ...state, cart: payload };

    default:
      return state;
  }
};

export default setState;
