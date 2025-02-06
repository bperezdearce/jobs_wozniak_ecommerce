import Link from 'next/link';
import Image from "next/image"

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white text-center p-4">
            <Image src="https://cdn.ebaumsworld.com/2021/05/28/033753/86894975/funny-gaming-memes12.png" alt="404" width={480} height={448}/>
            <h2 className="text-3xl text-red-600 mb-4 font-myriadpro mt-4">404 - Not Found</h2>
            <p className="text-md text-gray-700 mb-6 font-myriadprolight">¡No hay nada aquí!</p>
            <Link href="/home" className="text-highlight-color hover:underline font-myriadpro text-xl">
                Volver al Home
            </Link>
        </div>
    );
}

export default NotFound;