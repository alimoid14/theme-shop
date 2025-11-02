import { useState, useEffect, useReducer } from "react";
import { CartContext } from "./cartContext";
import { useAuthStore } from "../store/authStore";

const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000/api/cart/"
    : "/api/cart/";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const exists = state.items.find((i) => i.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id ? { ...i, count: i.count + 1 } : i
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, count: 1 }],
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload.id),
      };

    case "INCREMENT":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id ? { ...i, count: i.count + 1 } : i
        ),
      };

    case "DECREMENT": {
      const updated = state.items
        .map((i) =>
          i.id === action.payload.id ? { ...i, count: i.count - 1 } : i
        )
        .filter((i) => i.count > 0);
      return { ...state, items: updated };
    }

    case "CLEAR_CART":
      return { items: [] };

    case "SET_CART":
      return { ...state, items: action.payload };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const { isAuthenticated, isCheckingAuth } = useAuthStore();
  const storedState = JSON.parse(localStorage.getItem("cart")) || { items: [] };
  const [state, dispatch] = useReducer(cartReducer, storedState);
  const [isCartInitialized, setIsCartInitialized] = useState(false);

  // ✅ Load correct cart on login/logout
  useEffect(() => {
    const loadCart = async () => {
      if (isCheckingAuth) return;
      try {
        if (isAuthenticated) {
          // merge local cart into server cart (once per login)
          const localCart =
            JSON.parse(localStorage.getItem("cart"))?.items || [];
          if (localCart.length > 0) {
            await fetch(API_URL + "merge", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify({ localCart }),
            });
            localStorage.removeItem("cart");
          }

          // get latest cart from DB
          const res = await fetch(API_URL, { credentials: "include" });
          const items = await res.json();
          dispatch({ type: "SET_CART", payload: items });
        } else {
          // guest: use local storage
          const localCart = JSON.parse(localStorage.getItem("cart")) || {
            items: [],
          };
          dispatch({ type: "SET_CART", payload: localCart.items });
        }
      } catch (err) {
        console.error("Error loading cart:", err);
      } finally {
        setIsCartInitialized(true);
      }
    };

    loadCart();
  }, [isAuthenticated, isCheckingAuth]);

  // ✅ Sync cart to backend or localStorage
  useEffect(() => {
    const syncCart = async () => {
      if (isCheckingAuth || !isCartInitialized) return;
      if (isAuthenticated) {
        try {
          await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ items: state.items }),
          });
        } catch (err) {
          console.error("Error syncing cart:", err);
        }
      } else {
        localStorage.setItem("cart", JSON.stringify(state));
      }
    };
    syncCart();
  }, [state, isAuthenticated, isCheckingAuth, isCartInitialized]);

  const totalCost = state.items.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  return (
    <CartContext.Provider value={{ state, dispatch, totalCost }}>
      {children}
    </CartContext.Provider>
  );
};
