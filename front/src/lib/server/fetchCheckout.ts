export const postOrder = async (products: Number[], token: string | null) => {
    try {
        const response = await fetch("http://localhost:3000/orders", {
            method: "POST",
            headers: {
                Authorization: `${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ products }),
        });

        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error en la solicitud');
        }
    } catch (error) {
        console.error(error);
        throw error; 
    }
};