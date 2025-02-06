
import ProductsGrid from "@/components/Cards";
import Carousel from "@/components/Carousel";
import fetchProducts from "@/lib/server/fetchProducts";

async function Home() {
        const products = await fetchProducts();

    return (
        <div className="w-full bg-background-color">
            <div>
                <Carousel />    
            </div>
            <div className="bg-background-color h-full">
                <div className="container mx-auto py-12 px-4 md:px-8">
                    <h2 className="text-3xl font-myriadprolight">Nuestros Productos</h2>
                </div>
            </div>
                <ProductsGrid products={products}/>
        </div>
    )
}

export default Home;