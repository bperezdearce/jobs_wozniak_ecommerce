import { IProductCardProps } from "@/interfaces/interfaces";
import Image from "next/image";
import CrossIcon from "@/assets/CrossIcon.svg"

function CartItem({ product, remove }: IProductCardProps) {
    return (
        <div className="flex w-full border-b border-gray-300 py-4 font-myriadpro">
            <div className="w-2/5 flex items-center">
                <div className="w-32 h-32 relative mr-6">
                    <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="contain"
                        className="rounded"
                    />
                </div>
                <span>{product.name}</span>
            </div>
            <div className="w-2/5 flex items-center justify-center">
                <span>${product.price}</span>
            </div>
            <div className="w-1/5 flex items-center justify-center">
                <button onClick={remove}>
                    <Image 
                    src={CrossIcon}
                    alt="eliminar"
                    width={20}
                    height={20} 
                    />
                </button>
            </div>
        </div>
    );
}

export default CartItem;
