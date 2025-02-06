"use client"

import { useContext, useState } from "react";
import { validateRegister } from "@/utils/validation";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

function Register() {
    const router = useRouter();
    const {register} = useContext(UserContext)
    const [registerValues, setRegisterValues] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        phone: "",         
    });

    const [errors, setErrors] = useState({} as {[key: string]: string});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setRegisterValues({...registerValues, [name]:value})
        setErrors(validateRegister({...registerValues, [name]: value}));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    const success = await register(registerValues);
        if (success) {
            Swal.fire ({
                title: "Registro exitoso.",
                icon: "success"
            })
            router.push("/home");
        } else {
            Swal.fire ({
                title: "Usuario ya existe en la base de datos, inicia sesión o intenta nuevamente.",
                icon: "error"
            })
        }
    };

    return ( 
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
                <label htmlFor="name" className="mb-1.5 block font-garamondregular text-xl text-text-color">Nombre y Apellido </label>
                <input onChange={handleChange} name="name" id="name" type="text" placeholder="" className="w-full rounded-md border border-highlight-color bg-white py-3 px-6 text-base font-medium outline-none focus:shadow-md" required/>
                {errors.name && (<span className="text-red-500">{errors.name}</span>)}
            </div>
            <div className="space-y-2">
                <label htmlFor="email" className="mb-1.5 block font-garamondregular text-xl text-text-color">Correo Electrónico </label>
                <input onChange={handleChange} name="email" id="email" type="email" placeholder="" className="w-full rounded-md border border-highlight-color bg-white py-3 px-6 text-base font-medium outline-none focus:shadow-md" required/>
                {errors.email && (<span className="text-red-500">{errors.email}</span>)}
            </div>
            <div className="space-y-2">
                <label htmlFor="password" className="mb-1.5 block font-garamondregular text-xl text-text-color">Contraseña </label>
                <input onChange={handleChange} name="password" id="password" type="password" placeholder="" className="w-full rounded-md border border-highlight-color bg-white py-3 px-6 text-base font-medium outline-none focus:shadow-md" required/>
                {errors.password && (<span className="text-red-500">{errors.password}</span>)}
            </div>
            <div className="space-y-2">
                <label htmlFor="address" className="mb-1.5 block font-garamondregular text-xl text-text-color">Dirección de Despacho </label>
                <input onChange={handleChange} name="address" id="address" type="text" placeholder="" className="w-full rounded-md border border-highlight-color bg-white py-3 px-6 text-base font-medium outline-none focus:shadow-md" required/>
                {errors.address && (<span className="text-red-500">{errors.address}</span>)}
            </div>
            <div className="space-y-2">
                <label htmlFor="phone" className="mb-1.5 block text-xl font-garamondregular text-text-colorr">Teléfono </label>
                <input onChange={handleChange} name="phone" id="phone" type="tel" placeholder="" className="w-full rounded-md border border-highlight-color bg-white py-3 px-6 text-base font-medium outline-none focus:shadow-md" required/>
                {errors.phone && (<span className="text-red-500">{errors.phone}</span>)}
            </div>
                <button type="submit" disabled={Object.keys(errors).length > 0} className="px-6 py-3 text-xl font-garamondregular text-background-color bg-highlight-color hover:bg-blue-800 focus:outline-none rounded-lg text-center">Registrarse</button>
        </form>
    );
}

export default Register;