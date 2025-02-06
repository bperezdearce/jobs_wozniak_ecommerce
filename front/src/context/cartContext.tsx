"use client";

import { createContext, useEffect, useState } from "react";
import { ICartContextType, IProduct } from "@/interfaces/interfaces";
import addItem from "@/utils/addItem";
import removeItem from "@/utils/removeItem";
import { postOrder } from '@/lib/server/fetchCheckout'; 
import Swal from "sweetalert2";

export const CartContext = createContext<ICartContextType>({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    total: 0,
    proceedToCheckout: () => {}
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<IProduct[]>([]);
    const [total, setTotal] = useState(0);
    
    
    const addToCart = async (product: number) => {
        try {
            const updatedCart = await addItem(cartItems, product);
            setCartItems(updatedCart);
        } catch (error) {
            Swal.fire({
                title: "Error al añadir el producto al carrito.",
                icon: "error"
            })
        }
    };

    const removeFromCart = (product: number) => {
        setCartItems(removeItem(cartItems, product));
    };

    const checkout = async (cartItems: IProduct[]) => {
        try {
            const products = cartItems.map(item => item.id);
            const token = localStorage.getItem("token");
    
            if (!token) {
                throw new Error("Token no encontrado.");
            }
    
            await postOrder(products, token);
            Swal.fire({
                title: "Compra exitosa",
                icon: "success"
            })
            return true; 
        } catch (error) {
            Swal.fire({
                title: "Error al realizar la compra. Por favor, intente nuevamente.",
                icon: "error"
            })
            return false; 
        }
    };

    const proceedToCheckout = async () => {
        const success = await checkout(cartItems);
        if (success) {
            setCartItems([]); 
        }
    };

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.price, 0);
        setTotal(total);
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems, total, addToCart, removeFromCart, proceedToCheckout }}>
            {children}
        </CartContext.Provider>
    );
};