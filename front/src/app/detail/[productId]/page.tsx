import Image from "next/image";
import Link from "next/link";
import fetchProductById from "@/lib/server/fetchProductById";
import AddToCart from "@/components/AddToCart";

async function ProductDetail({ params }: { params: { productId: string } }) {
    const product = await fetchProductById(params.productId);

    return (
        <div className="bg-background-color text-text-color h-[800px] p-8 flex flex-col items-center">
            <div className="flex flex-row items-start space-x-8 max-w-4xl w-full">


                <div className="flex flex-col items-start flex-1">
                    <h1 className="text-3xl font-myriadpro mb-4">{product.name}</h1>
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="rounded-lg shadow-md"
                    />
                </div>
                

                <div className="flex flex-col flex-1 justify-between">
                    <p className="text-lg mt-4 mb-4 max-w-xl font-myriadprolight ">{product?.description}</p>
                    <p className="text-xl font-semibold mb-6">$ {product?.price}</p>
                    <AddToCart id={product.id} />
                    <Link href="/home">           <button className="mt-4 px-6 py-3 bg-highlight-color text-background-color font-myriadprolight rounded-lg shadow-lg hover:bg-blue-700 transition"> Volver a Productos </button> </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
