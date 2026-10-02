import { createContext, useContext, useReducer, useEffect } from "react";
import PopupMessage from "../Common/PopupMessage";

const CartContext = createContext();

const initialState = {
  cart: JSON.parse(localStorage.getItem("moon_cart")) || [],
  popupMessage: "",
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product, quantity = 1 } = action.payload;

      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === product.id
      );

   
      if (existingItemIndex === -1 && state.cart.length >= 10) {
        return {
          ...state,
          popupMessage: "You can only add up to 10 unique products to your cart.",
        };
      }

      if (existingItemIndex > -1) {
        const updatedCart = state.cart.map((item, index) => {
          if (index === existingItemIndex) {
            const maxAllowed = Math.min(10, item.stock || 10);
            const newQuantity = Math.min(
              item.quantity + quantity,
              maxAllowed
            );
            return { ...item, quantity: newQuantity };
          }
          return item;
        });
        return { ...state, cart: updatedCart };
      } else {
        const initialQty = Math.min(quantity, product.stock || 10, 10);
        const newItem = { ...product, quantity: initialQty };
        return { ...state, cart: [...state.cart, newItem] };
      }
    }

    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;
      const updatedCart = state.cart.map((item) => {
        if (item.id === id) {
          const maxAllowed = Math.min(10, item.stock || 10);
          const validQty = Math.max(1, Math.min(quantity, maxAllowed));
          return { ...item, quantity: validQty };
        }
        return item;
      });
      return { ...state, cart: updatedCart };
    }

    case "REMOVE_FROM_CART": {
      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, cart: filteredCart };
    }

    case "CLEAR_CART": {
      return { ...state, cart: [] };
    }

  
    case "CLEAR_POPUP": {
      return { ...state, popupMessage: "" };
    }

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("moon_cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (product, quantity = 1) => {
    dispatch({ type: "ADD_TO_CART", payload: { product, quantity } });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const totalItems = state.cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = state.cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
      
  
      <PopupMessage 
        message={state.popupMessage} 
        onClose={() => dispatch({ type: "CLEAR_POPUP" })} 
      />
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}