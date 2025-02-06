"use client";

import { useContext } from "react";
import { CartContext } from "@/context/cartContext";
import CartItem from "../CartItem";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";

function Cart() {
    const { cartItems, removeFromCart, total, proceedToCheckout } = useContext(CartContext);
    const { isLogged } = useContext(UserContext);
    const router = useRouter();

    const handleCheckout = () => {
            proceedToCheckout();
            router.push("/dashboard");
        };

    const handleRedirect = () => {
        router.push('/auth-page');
    };

    return (
                <div className="flex flex-col justify-between w-full bg-white border border-gray-300 rounded-lg shadow-md p-6">
                    {!isLogged ? (
                        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
                            <button
                                onClick={handleRedirect}
                                className="p-4 rounded-lg text-white bg-red-500 hover:bg-red-600 transition-colors duration-300 ease-in-out"
                            >
                                Debes iniciar sesión para acceder a un carrito de compras
                            </button>
                        </div>
                    ) : (
                        <>
                            {cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <div key={item.id} className="mb-4">
                                        <CartItem product={item} remove={() => removeFromCart(item.id)} />
                                    </div>
                                ))
                            ) : (
                                <div className="text-md font-myriadprolight pt-2 text-center text-gray-600">
                                    No hay items en el carro de compras.
                                </div>
                            )}
                            {total > 0 && (
                                <div className="w-full flex justify-between items-center text-lg font-myriadpro border-gray-300 mt-6">
                                    <p className="text-text-color">Total: <span>${total}</span></p>
                                    <button 
                                        className="bg-highlight-color hover:bg-highlight-dark text-white py-2 px-4 rounded-lg shadow transition duration-300 ease-in-out"
                                        onClick={handleCheckout}
                                    >
                                        Comprar
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
    );
}

export default Cart;