const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const phoneRegex = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/;

export const validateLogin = (loginValues: {
    email: string;
    password: string;
}) => {
    let errors = {};
    if(!loginValues.email) {
        errors = {...errors, email:"El correo electrónico es requerido"} 
    }
        else {
            if (!emailRegex.test(loginValues.email)) {
            errors = {...errors, email:"El correo electrónico es inválido"};
        }
    }
    if(!loginValues.password) {
        errors = {...errors, password:"La contraseña es requerida"};
    }
        else {
            if (!passwordRegex.test(loginValues.password)) {
            errors = {...errors, password: "La contraseña debe tener al menos ocho caracteres, una letra y un número"};
        } 
    }

    return errors;
}

export const validateRegister = (registerValues: {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
}) => {
    let errors =  {};
    if(!registerValues.name) {
        errors = {...errors, name:"El nombre y el apellido son requeridos"};
    }
    if(!registerValues.email) {
        errors = {...errors, email:"El correo electrónico es requerido"} 
    }
        else {
            if (!emailRegex.test(registerValues.email)) {
            errors = {...errors, email:"El correo electrónico es inválido"};
        }
    }
    if(!registerValues.password) {
        errors = {...errors, password:"La contraseña es requerida"};
    }
        else {
            if (!passwordRegex.test(registerValues.password)) {
            errors = {...errors, password: "La contraseña debe estar compuesta de letras y números, con un mínimo de ocho caracteres"};
        } 
    }
    if(!registerValues.address) {
        errors = {...errors, address:"La dirección de despacho es requerida"}
    }
    if(!registerValues.phone) {
        errors = {...errors, phone:"El teléfono es requerido"}
    }
    else {
            if(!phoneRegex.test(registerValues.phone)) {
            errors = {...errors, phone: "El número telefónico debe ser válido en Chile"}
            }
        }

    return errors;
}