import { create } from "zustand/react";
import { persist } from "zustand/middleware";

export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  slug: string;
};

export type CartItem = Product & {
  quantity: number;
};

type CartState = {
  cart: CartItem[];
  total: number;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => {
      // 👇 Utility function to recalculate total
      const calculateTotal = (cart: CartItem[]) => {
        return cart.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);
      };

      return {
        cart: [],
        total: 0,

        addToCart: (product) => {
          const cart = get().cart;
          const existing = cart.find((item) => item.id === product.id);

          let updatedCart: CartItem[];
          if (existing) {
            updatedCart = cart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          } else {
            updatedCart = [...cart, { ...product, quantity: 1 }];
          }

          set({ cart: updatedCart, total: calculateTotal(updatedCart) });
        },

        removeFromCart: (id) => {
          const updatedCart = get().cart.filter((item) => item.id !== id);
          set({ cart: updatedCart, total: calculateTotal(updatedCart) });
        },

        clearCart: () => {
          set({ cart: [], total: 0 });
        },

        increaseQuantity: (id) => {
          const updatedCart = get().cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          );
          set({ cart: updatedCart, total: calculateTotal(updatedCart) });
        },

        decreaseQuantity: (id) => {
          const currentCart = get().cart;
          const item = currentCart.find((item) => item.id === id);

          let updatedCart: CartItem[];
          if (item && item.quantity === 1) {
            updatedCart = currentCart.filter((item) => item.id !== id);
          } else {
            updatedCart = currentCart.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            );
          }

          set({ cart: updatedCart, total: calculateTotal(updatedCart) });
        },
      };
    },
    {
      name: "cartStorage",
    }
  )
);
