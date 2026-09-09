"use client";

/**
 * Cart state — persisted to localStorage under "libas.cart".
 * A cart "line" = a product + a chosen size + a chosen colour + quantity.
 * We store only the product id + variant in storage and re-hydrate the
 * full product from src/data/products.js so prices/images stay in sync.
 */

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { getAllProducts } from "@/data/products";
import { cartLineId } from "@/lib/utils";

const STORAGE_KEY = "libas.cart";
const CartContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, lines: action.lines, ready: true };

    case "ADD": {
      const { productId, size, color, quantity } = action.payload;
      const id = cartLineId(productId, size, color);
      const existing = state.lines.find((l) => l.id === id);
      const lines = existing
        ? state.lines.map((l) =>
            l.id === id ? { ...l, quantity: l.quantity + quantity } : l
          )
        : [...state.lines, { id, productId, size, color, quantity }];
      return { ...state, lines };
    }

    case "SET_QTY": {
      const lines = state.lines
        .map((l) =>
          l.id === action.payload.id
            ? { ...l, quantity: Math.max(1, action.payload.quantity) }
            : l
        )
        .filter(Boolean);
      return { ...state, lines };
    }

    case "REMOVE":
      return {
        ...state,
        lines: state.lines.filter((l) => l.id !== action.payload.id),
      };

    case "CLEAR":
      return { ...state, lines: [] };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { lines: [], ready: false });

  /* hydrate once on mount */
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      dispatch({ type: "HYDRATE", lines: raw ? JSON.parse(raw) : [] });
    } catch {
      dispatch({ type: "HYDRATE", lines: [] });
    }
  }, []);

  /* persist on change */
  useEffect(() => {
    if (!state.ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.lines));
    } catch {
      /* storage unavailable (private mode) — ignore */
    }
  }, [state.lines, state.ready]);

  const value = useMemo(() => {
    const allProducts = getAllProducts();

    /* attach full product objects to each line */
    const items = state.lines
      .map((line) => {
        const product = allProducts.find((p) => p.id === line.productId);
        if (!product) return null;
        return { ...line, product, lineTotal: product.price * line.quantity };
      })
      .filter(Boolean);

    const subtotal = items.reduce((s, it) => s + it.lineTotal, 0);
    const count = items.reduce((s, it) => s + it.quantity, 0);

    return {
      ready: state.ready,
      items,
      subtotal,
      count,
      addItem: ({ productId, size, color, quantity = 1 }) =>
        dispatch({ type: "ADD", payload: { productId, size, color, quantity } }),
      setQuantity: (id, quantity) =>
        dispatch({ type: "SET_QTY", payload: { id, quantity } }),
      removeItem: (id) => dispatch({ type: "REMOVE", payload: { id } }),
      clearCart: () => dispatch({ type: "CLEAR" }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within <CartProvider>");
  return ctx;
}
