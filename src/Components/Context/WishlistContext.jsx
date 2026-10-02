import { createContext, useContext, useReducer, useEffect } from "react";
import PopupMessage from "../Common/PopupMessage";

const WishlistContext = createContext();

const initialState = {
  wishlist: JSON.parse(localStorage.getItem("moon_wishlist")) || [],
  PopupMessage: "", 
};

function wishlistReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_WISHLIST": {
      const product = action.payload;
      const existingItemIndex = state.wishlist.findIndex(
        (item) => item.id === product.id
      );

      if (existingItemIndex > -1) {
        return {
          ...state,
          wishlist: state.wishlist.filter((item) => item.id !== product.id),
        };
      } else {
  
        if (state.wishlist.length >= 10) {
          return {
            ...state,
            popupMessage: "You can only add up to 10 favorite items to your wishlist.",
          };
        }
        return { ...state, wishlist: [...state.wishlist, product] };
      }
    }

    case "REMOVE_FROM_WISHLIST": {
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload),
      };
    }

    case "CLEAR_WISHLIST": {
      return { ...state, wishlist: [] };
    }
    

    case "CLEAR_POPUP": {
      return { ...state, popupMessage: "" };
    }

    default:
      return state;
  }
}

export function WishlistProvider({ children }) {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  useEffect(() => {
    localStorage.setItem("moon_wishlist", JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  const toggleWishlist = (product) => {
    dispatch({ type: "TOGGLE_WISHLIST", payload: product });
  };

  const removeFromWishlist = (id) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
  };

  const clearWishlist = () => {
    dispatch({ type: "CLEAR_WISHLIST" });
  };

  const isInWishlist = (id) => {
    return state.wishlist.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist: state.wishlist,
        toggleWishlist,
        removeFromWishlist,
        clearWishlist,
        isInWishlist,
      }}
    >
      {children}
      

      <PopupMessage 
        message={state.popupMessage} 
        onClose={() => dispatch({ type: "CLEAR_POPUP" })} 
      />
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}