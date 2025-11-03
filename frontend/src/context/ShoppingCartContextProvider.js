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

  const addToCart = async (id) => {
    const product = state.products.find((p) => p.id === id);

    if (!product) return;

    const itemInCart = state.cart.find((item) => item.id === id);

    if (itemInCart) {
      const updatedItem = { ...itemInCart, quantity: itemInCart.quantity + 1 };

      await axios.put(`http://localhost:5000/cart/${id}`, updatedItem);
    } else {
      const newItem = { ...product, quantity: 1 };

      await axios.post("http://localhost:5000/cart", newItem, {
        headers: { "Content-Type": "application/json" },
      });
    }

    readState();
  };



  const deleteFromCart = async (id, all = false) => {
    const item = state.cart.find((item) => item.id === id);
    if (!item) return;

    if (all || item.quantity === 1) {
      await axios.delete(`http://localhost:5000/cart/${id}`);
    } else {
      const updatedItem = { ...item, quantity: item.quantity - 1 };

      await axios.put(`http://localhost:5000/cart/${id}`, updatedItem, {
        headers: { "content-type": "application/json" },
      });
    }

    readState();
  };


  const clearCart = async () => {
    for (const item of state.cart) {
      await axios.delete(`http://localhost:5000/cart/${item.id}`);
    }

    readState();
  };

  
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
