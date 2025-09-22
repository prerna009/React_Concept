import axios from "axios"
import type { User } from "../models/User";

const apiUrl = "http://localhost:3000/users";

export const getUsers = async (page: number, perPage: number, searchText: string) => {
   try {
    const allResponse = await axios.get<User[]>(apiUrl, {
      params: { q: searchText },
    });
    const total = allResponse.data.length;

    const start = (page - 1) * perPage;
    const end = start + perPage;
    const pageData = allResponse.data.slice(start, end);

    return { data: pageData, total };
  } catch (error) {
    console.error(error);
    return { data: [], total: 0 };
  }
};

export async function addUser(user: any): Promise<any> {
    const res = await axios.post(apiUrl, user);
    return res.data;
}

export async function deleteUser(userId: number): Promise<any[]> {
    const res = await axios.delete(`${apiUrl}/${userId}`);
    return res.data;
}

export async function updateUser(userId: number, user: any): Promise<any[]> {
    const res = await axios.put(`${apiUrl}/${userId}`, user);
    return res.data;
}

export async function getUserById(userId: number): Promise<any[]> {
    const res = await axios.get(`${apiUrl}/${userId}`);
    return res.data;
}