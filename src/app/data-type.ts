export interface signUp {
    name: string,
    email: string,
    password: string
}

export interface login {
    email: string,
    password: string
}
export interface Product {
    id: string,
    name: string,
    price: number,
    color: string,
    category: string,
    description: string,
    image: string,
    quantity: number | undefined;
}

export interface cart {
    id: string | undefined,
    name: string,
    price: number,
    color: string,
    category: string,
    description: string,
    image: string,
    quantity: number | undefined,
    userId : number,
    productId:string
}