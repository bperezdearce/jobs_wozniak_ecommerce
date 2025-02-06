import Image from 'next/image';
import Link from 'next/link';
import { IProductCardProps } from '@/interfaces/interfaces';
import AddToCart from '../AddToCart';

export const ProductCard = ({ product }: IProductCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-[400px] h-[450px]">
            <Link href={`/detail/${product.id}`}>
                <div className="p-4">
                    <Image 
                        alt={product.name} 
                        src={product.image}
                        width={400}
                        height={400}
                        className="w-full h-[300px] object-contain transition-transform duration-300 ease-in-out hover:scale-90"
                        style={{ aspectRatio: "400/400", objectFit: "contain" }}
                    />
                </div>
            </Link>
            <div className="p-4">
                <h3 className="text-2xl font-myriadprolight mb-2 text-text-color">
                    {product.name}
                </h3>
                <div className="flex items-center justify-between mt-4">
                    <div className="font-myriadprolight text-text-color text-xl">
                        ${product.price}
                    </div>
                    <AddToCart id={product.id} />
                </div>
            </div>
        </div>
    );
};