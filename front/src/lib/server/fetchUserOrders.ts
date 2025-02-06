import { IOrder } from "@/interfaces/interfaces";

export const getUserOrders = async (token: any) => {
    try {
        const response = await fetch("http://localhost:3000/users/orders", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`,
            },
        });

        if (!response.ok) {
            throw new Error("Error al obtener las órdenes");
        }

        const orders: IOrder[] = await response.json();
        return orders;
    } catch (error) {
        console.error("Error al obtener las órdenes", error);
        return []; 
    }
};