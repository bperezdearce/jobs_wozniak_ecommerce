import { IProduct } from "@/interfaces/interfaces";

const removeItem = (cartItems: IProduct[], product: number) => {
    return cartItems.filter((item) => item.id !== product);
};

export default removeItem;