import { createContext, useReducer, useEffect } from "react";
import { shoppingInitialState } from "@/reducer/shoppingCartInitialState";
import { shoppingReducer } from "@/reducer/shoppingCartReducer";
import { TYPES } from "@/reducer/shoppingCartActions";
import axios from "axios";

export const ShoppingCartContext = createContext();

const ShoppingCardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const readState = async () => {
    const ENDPOINTS = {
      products: "http://localhost:5000/products",
      cart: "http://localhost:5000/cart",
    };

    const productsResponse = await axios.get(ENDPOINTS.products);
    const cartResponse = await axios.get(ENDPOINTS.cart);

    const products = productsResponse.data;
    const cart = cartResponse.data;

    dispatch({ type: TYPES.READ_STATE, payload: { products, cart } });
  };

  useEffect(() => {
    readState();
  }, []);

  const addToCart = (id) =>
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });

  // contador total: suma las quantities
  const totalItemsInCart = state.cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const value = {
    state,
    readState,
    addToCart,
    totalItemsInCart,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCardContextProvider;