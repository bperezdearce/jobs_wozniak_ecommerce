"use client"

import { IUserContextType, IUserResponse, IOrder, ILoginUser, IRegisterUser } from "@/interfaces/interfaces";
import { postLogin, postRegister } from "@/lib/server/fetchUsers";
import { getUserOrders } from "@/lib/server/fetchUserOrders";
import { createContext, useState, useEffect, useCallback } from "react";
import Swal from "sweetalert2";

export const UserContext = createContext<IUserContextType> ({
    user: null,
    setUser: () => {},
    isLogged: false,
    setIsLogged: () => {},
    login: async () => false,
    register: async () => false,
    getOrders: async () => {},
    orders: [],
    logOut: () => {},
});

export const UserProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<IUserResponse | null>(null);
    const [isLogged, setIsLogged] = useState(false);
    const [orders, setOrders] = useState<IOrder[]>([]);

    const register = async (user: IRegisterUser) => {
        try {
            const data = await postRegister(user);

            if (data.id) {
                login({email: user.email, password: user.password});
                return true;
            }
            return false;
        } catch (error) {
          console.error(error);
          return false;  
        }
    };

    const login = async (credentials: ILoginUser) => {
        try {
            const data = await postLogin(credentials);
            setUser(data);

            localStorage.setItem("user", JSON.stringify(data));
            localStorage.setItem("token", data.token);

            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    const getOrders = useCallback(async () => {
        try {
            const token: string = localStorage.getItem("token") || "";
            const data = await getUserOrders(token);
            setOrders(data);

        } catch (error) {
            console.error(error);
        }
    }, []); 

    const logOut = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
        setIsLogged(false);
        Swal.fire({
            title: "Logout exitoso",
            icon: "success"
        })
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLogged(true);
        }
    }, [user]);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setUser(JSON.parse(user));
            return;
        }
        setUser(null);
    }, []);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                isLogged,
                setIsLogged,
                login,
                register,
                getOrders,
                orders,
                logOut,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};