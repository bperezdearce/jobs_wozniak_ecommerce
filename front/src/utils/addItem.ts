import { IProduct } from "@/interfaces/interfaces";
import fetchProductById from "@/lib/server/fetchProductById";

const addItem = async(cartItems: IProduct[], productId: number): Promise<IProduct[]> => {
    const existingProduct = cartItems.find((item) => item.id === productId);
    if (existingProduct) {
        throw new Error("El producto ya existe en el carrito. No se permiten productos duplicados.");
    }
    try {
        const data = await fetchProductById(productId.toString());
        return [...cartItems, data];
    } catch (error) {
        console.error("Error al obtener los datos del producto:", error);
        throw new Error("No se pudo agregar el producto al carrito.");
    }
};

export default addItem;