"use client"

import { useContext } from "react"
import { UserContext } from "@/context/userContext"
import { useRouter } from "next/navigation"

const FavoriteItems = () => {
    const { isLogged } = useContext(UserContext);
    const router = useRouter()

    return (
        <div>
        {isLogged ? (
            <p>Estos son mis favoritos</p>
        ) : (
            <p>Por favor, ingresa o regístrate para ver tus productos favoritos</p>
        )}
        </div>
    )
};

export default FavoriteItems;