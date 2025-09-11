import type { User } from "../interfaces/User";

export async function getUsers(): Promise<User[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
}