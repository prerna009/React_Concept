export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    username: string;
    address: Address;
    website: string;
    company: Company;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    }
}