import { create } from "zustand/react";
import { persist } from "zustand/middleware";

export type Product = {
    id: string
    name: string
    price: string
    image: string
    description: string
    slug: string
  }
  
  export type CartItem = Product & {
    quantity: number
  }
  

type CartState = {
    cart: CartItem[];
    addToCart: (product: Product) => void
    removeFromCart:(id: string) => void
    clearCart: () => void
    increaseQuantity: (id: string) => void
    decreaseQuantity: (id: string) => void
    total: number
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            cart: [],
            total: 0,

            addToCart: (product) =>  {
                const cart = get().cart
                const isProductInCart = cart.find((item) => item.id === product.id)
                if (isProductInCart) {
                    set({
                        cart: cart.map((item) => 
                        item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
                    })
                } else {
                    set({ cart: [...cart, {...product, quantity: 1 }]})
                }
            },
            removeFromCart: (id) => {
                set({ cart: get().cart.filter((item) => item.id !== id)})
            },
            clearCart: () => {
                set({cart: [] })
            },
            increaseQuantity: (id) => {
                set({ cart: get().cart.map((item) => item.id === id ? {...item, quantity: item.quantity + 1 } : item
                ) })
            },
            decreaseQuantity: (id) => {
                const item = get().cart.find((p) => p.id === id)
                if (item?.quantity === 1) {
                    get().removeFromCart(id)
                } else {
                    set({
                        cart: get().cart.map((item) => item.id === id ? {...item, quantity: item.quantity - 1} : item
                        )
                    })
                }
            },
        }),
        {
            name: 'cartStorage'
        }
    )
);