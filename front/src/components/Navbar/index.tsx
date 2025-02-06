"use client"

import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";

function Navbar() {

    const {isLogged, logOut} = useContext(UserContext);

    return (
        <nav className="text-text-color border-t shrink-0 border-b border-gray-300">
            <div className="flex items-center justify-between px-4 lg:px-6 h-14">
                <header className="flex items-center">
                    <Link href="/" className="font-garamondbold text-2xl">Jobs&Wozniak</Link>    
                </header> 
                <div className="flex gap-4 sm:gap-6">
                        <Link href="/home" className="text-lg font-garamondregular hover:underline underline-offset-4">Productos</Link>

                    {isLogged ? (
                        <Link href="/dashboard" className="text-lg font-garamondregular hover:underline underline-offset-4">Mi Cuenta</Link>
                    ) : (
                        <Link href="/auth-page" className="text-lg font-garamondregular hover:underline underline-offset-4">Ingresar/Registro</Link>
                    )}

                    {isLogged && <Link href="/checkout" className="text-lg font-garamondregular hover:underline underline-offset-4">Carro de Compras</Link>
                    }

                    {isLogged && <Link href="/"><button className="text-lg font-garamondregular hover:underline underline-offset-4" onClick={logOut}>Logout</button></Link>
                    }
                        
                </div>
            </div>
        </nav>
    )
};

export default Navbar;