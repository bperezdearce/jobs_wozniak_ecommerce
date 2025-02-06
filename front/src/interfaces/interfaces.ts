interface IUser {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    password: string;
    order: IOrder[];
}

interface IUserResponse {
    login: boolean;
    user: Partial<IUser> | null;
    token: string;
}

interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
}

interface IProductCardProps {
    product: IProduct;
    remove?: () => void;
}

interface IProductGridProps {
    products: IProduct[];
}

interface IOrder {
    id: number;
    status: string;
    date: Date;
    products: IProduct[];   
}

interface ILoginUser {
    email: string;
    password: string;
}

interface IRegisterUser {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
}

interface ICartContextType {
    cartItems: IProduct[];
    addToCart: (product: number) => void;
    removeFromCart: (product: number) => void;
    total: number;
    proceedToCheckout: () => void;
}

interface IUserContextType {
    user: Partial<IUserResponse> | null;
    setUser: React.Dispatch<React.SetStateAction<IUserResponse | null >>;
    isLogged: boolean,
    setIsLogged: (isLogged: boolean) => void;
    login: (credentials: ILoginUser) => Promise<boolean>;
    register: (user: IRegisterUser) => Promise<boolean>;
    getOrders: () => Promise<void>;
    orders: IOrder[] | [];
    logOut: () => void;
}

export type {
    IProduct,
    IProductCardProps,
    IProductGridProps,
    ICartContextType,
    IUserContextType,
    IRegisterUser,
    ILoginUser,
    IUserResponse,
    IOrder,
}