"use client";

import { useState, useContext, useEffect } from "react";
import { CartContext } from "@/context/cartContext";
import Image from "next/image";
import CartIcon from "@/assets/CartIcon.svg";
import { UserContext } from "@/context/userContext";
import addItem from "@/utils/addItem";

function AddToCart({ id }: { id: number }) {
    const { cartItems, addToCart } = useContext(CartContext);
    const { isLogged } = useContext(UserContext);
    const [notification, setNotification] = useState<{ message: string, type: 'success' | 'error' } | null>(null);

    async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        if (!isLogged) {
            setNotification({ message: "Inicia sesión para agregar items al carrito", type: 'error' });
            return;
        }

        try {
            await addItem(cartItems, id);
            addToCart(id);
            setNotification({ message: "Item añadido al carrito", type: 'success' });
        } catch (error) {
            if (error instanceof Error) {
                setNotification({ message: "El producto ya existe en el carrito.", type: 'error' });
            } else {
                setNotification({ message: "Ocurrió un error al agregar el item al carrito.", type: 'error' });
            }
        }
    }

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                setNotification(null);
            }, 2000); 

            return () => clearTimeout(timer);
        }
    }, [notification]);

    return (
        <>
            <button onClick={handleClick}>
                <Image
                    src={CartIcon}
                    alt="carrito"
                    width={30}
                    height={30}
                />
            </button>

            {notification && (
                <div className={`fixed bottom-4 right-4 p-4 rounded-lg text-white ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                    {notification.message}
                </div>
            )}
        </>
    );
}

export default AddToCart;
