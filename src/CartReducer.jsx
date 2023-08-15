
const INITIAL_STATE = {
  cartState: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  products: [],
  isLoading: false,
  error: false,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "START_FETCH":
      return {
        ...state,
        isLoading: true,
      };

    case "FETCH_SUCCESSFUL":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cartState: [...state.cartState, action.payload],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartState: state.cartState.filter((cart) => cart.id !== action.payload),
      };

    case "SET_PRODUCTS":
      return {
        ...state,
        cartState: [],
        products: action.payload,
        isLoading: false,
      };

    case "FETCH_ERROR":
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case "UPDATE_CART":
      return {
        ...state,
        cartState: action.payload,
      };

    default:
      return state;
  }
};

export { INITIAL_STATE, cartReducer };
