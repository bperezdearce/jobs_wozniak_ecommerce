import { ILoginUser, IRegisterUser } from "@/interfaces/interfaces";

export const postRegister = async (user: IRegisterUser) => {
    const response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
};

export const postLogin = async (credentials: ILoginUser) => {
    try {
        const response = await fetch("http://localhost:3000/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Error al hacer login");
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error en la solicitud de login:", error);
        return null;
    }
};
