import type { User } from "../interfaces/User";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

export async function getUsers(): Promise<User[]> {
    const response = await fetch(apiUrl);
    return response.json();
}

export async function getUserById(id: number) {
    const response = await fetch(`${apiUrl}/${id}`);
    return response.json();
}