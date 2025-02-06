import { IProductGridProps } from "@/interfaces/interfaces";
import { IProduct } from "@/interfaces/interfaces";
import { ProductCard } from "../Card";

function ProductsGrid({ products }: IProductGridProps) {
    const safeProducts = products || [];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-28 mb-6">
            {safeProducts.map((product: IProduct) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductsGrid;