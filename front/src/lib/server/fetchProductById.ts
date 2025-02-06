import { IProduct } from "@/interfaces/interfaces"

async function fetchProductById(id: string): Promise<IProduct> {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        const product = await response.json();
        return product;
};

export default fetchProductById;