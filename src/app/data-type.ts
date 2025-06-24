export interface signUp {
    name: string,
    email: string,
    password: string
}

export interface login {
    email: string,
    password: string
}
export interface addProduct {
    id: string,
    name: string,
    price: number,
    color: string,
    category: string,
    description: string,
    image: string
}