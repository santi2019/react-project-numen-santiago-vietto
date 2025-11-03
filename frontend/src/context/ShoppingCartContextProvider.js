import { useState, createContext, useReducer, useEffect } from "react";
import { shoppingInitialState } from "@/reducer/shoppingCartInitialState";
import { shoppingReducer } from "@/reducer/shoppingCartReducer";
import { TYPES } from "@/reducer/shoppingCartActions";
import axios from "axios";

export const ShoppingCartContext = createContext();

const ShoppingCardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const [cartModalOpen, setCartModalOpen] = useState(false);

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

  const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id });


  const deleteFromCart = (id, all = false) => {
    if (all){
      dispatch({type: TYPES.REMOVE_ALL_ITEMS, payload: id});
    }else{
      dispatch({type: TYPES.REMOVE_ONE_ITEM, payload: id});
    }
  }

  const clearCart = () => dispatch({type: TYPES.CLEAR_CART});

  
  const totalItemsInCart = state.cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );


const cartTotal = state.cart.length > 0
  ? state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  : 0;

  const openModal = (productId) => {
    setSelectedProductId(productId);
    setModalOpen(true);
  };

  const confirmAdd = () => {
    if (selectedProductId !== null) {
      addToCart(selectedProductId);
    }
    
    setModalOpen(false);
    setSelectedProductId(null);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProductId(null);
  };

  const openCartModal = () => setCartModalOpen(true);
  const closeCartModal = () => setCartModalOpen(false);
  const toggleCartModal = () => setCartModalOpen(prev => !prev);

  const value = {
    state,
    readState,
    addToCart,
    deleteFromCart,
    clearCart,
    cartTotal,
    totalItemsInCart,
    modalOpen,
    selectedProductId,
    openModal,
    confirmAdd,
    closeModal,
    cartModalOpen,
    openCartModal,
    closeCartModal,
    toggleCartModal,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCardContextProvider;
