'use client'

import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '@/context/userContext';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const DashboardInfo = () => {
    const { getOrders, orders, user, isLogged } = useContext(UserContext);
    const router = useRouter();

    useEffect(() => {
        getOrders().catch(error => {
            Swal.fire({
                title: "Error al obtener las órdenes",
                icon: "error"
            });
        });
    }, [getOrders]);
    
    const handleRedirect = () => {
        router.push('/auth-page');
    };

    return (
        <div className="container mx-auto p-6 bg-background-color min-h-[800px]">
            {!isLogged ? (
                <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
                    <button
                        onClick={handleRedirect}
                        className="p-4 rounded-lg text-white bg-red-500 hover:bg-red-600 transition-colors"
                    >
                        Debes iniciar sesión para ver esta página.
                    </button>
                </div>
            ) : (
                <>
                    <h1 className="text-3xl font-myriadpro mb-6 text-center text-gray-800">Bienvenido/a, {user?.user?.name || "User"}</h1>
                    <p className="text-center text-text-color mb-6 font-myriadprolight text-lg">
                        A continuación, podrás visualizar tu información de usuario y las compras que has realizado.
                    </p>
                    <div className="flex gap-6">
                        <div className="w-1/2 bg-white border border-gray-300 rounded-lg shadow-md">
                            <h2 className="bg-gray-200 px-4 py-3 font-semibold text-text-color font-myriadpro text-lg">Información del Usuario</h2>
                            <div className="space-y-4 p-6">
                                <div className="flex justify-between text-text-color">
                                    <div className="font-myriadpro text-md">Nombre:</div>
                                    <div className="font-myriadprolight text-md">{user?.user?.name}</div>
                                </div>
                                <div className="flex justify-between text-text-color">
                                    <div className="font-myriadpro text-md">Correo:</div>
                                    <div className="font-myriadprolight text-md">{user?.user?.email}</div>
                                </div>
                                <div className="flex justify-between text-text-color">
                                    <div className="font-myriadpro text-md">Dirección de Despacho:</div>
                                    <div className="font-myriadprolight text-md">{user?.user?.address}</div>
                                </div>
                                <div className="flex justify-between text-text-color">
                                    <div className="font-myriadpro text-md">Teléfono de Contacto:</div>
                                    <div className="font-myriadprolight text-md">{user?.user?.phone}</div>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2 bg-white border border-gray-300 rounded-lg shadow-md">
                            <div className="bg-gray-200 px-4 py-3 font-semibold text-text-color font-myriadpro text-lg">
                                Compras anteriores
                            </div>
                            <div className="p-4">
                                {orders.length > 0 ? (
                                    <div className='font-myriadprolight'>
                                        {orders.map(order => (
                                            <div key={order.id} className="border-b border-gray-300 mb-4 pb-4">
                                                <div className="flex justify-between mb-2">
                                                    <div className="w-1/2 font-semibold text-gray-700">{new Date(order.date).toLocaleDateString()}</div>
                                                    <div className="w-1/2">
                                                        <ul className="list-disc pl-5">
                                                            {order.products.map(product => (
                                                                <li key={product.id} className="text-gray-700">{product.name} - ${product.price}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-center text-gray-600 mt-4 font-myriadpro text-md">No existen órdenes para este usuario.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default DashboardInfo;
