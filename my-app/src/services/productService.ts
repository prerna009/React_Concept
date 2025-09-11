import type { ProductResponse } from "../interfaces/Product";

export async function getProducts(): Promise<ProductResponse> {
  const response = await fetch("https://dummyjson.com/products");

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  const data: ProductResponse = await response.json();
  return data;
}