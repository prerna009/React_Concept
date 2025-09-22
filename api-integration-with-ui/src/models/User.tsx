export interface User {
    id: number;
    name: string;
    email: string;
    address: Address;
}

export interface Address {
    city: string;
    zipcode: string;
}