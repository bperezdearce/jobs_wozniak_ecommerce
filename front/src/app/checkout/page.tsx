import Cart from "@/components/Cart";

function Checkout() {
    return (
        <div className="bg-background-color min-h-screen p-6">
            <h1 className="text-3xl font-myriadpro mb-2 text-center text-gray-800">Carro de Compras</h1>
            <p className="text-center text-text-color mb-6 font-myriadprolight text-lg">
                Revisa los productos en tu carro de compras y procede al pago cuando estés listo/a.
            </p>
            <div className="bg-white rounded-lg shadow-md p-4">
                <div className="flex w-full border-b border-gray-300 py-4 font-myriadpro">
                    <div className="w-2/5 flex">
                        <span>Producto</span>
                    </div>
                    <div className="w-2/5 flex items-center justify-center">
                        <span>Precio</span>
                    </div>
                    <div className="w-1/5 flex items-center justify-center">
                        <span>Eliminar del Carro</span>
                    </div>
                </div>
                <Cart />
            </div>
        </div>
    );    
}

export default Checkout;

