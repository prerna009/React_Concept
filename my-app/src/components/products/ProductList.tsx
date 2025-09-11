import type React from "react";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import type { Product } from "../../interfaces/Product";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

const ProductList: React.FC = () => {
    const [products, setProduct] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts().then((data) => {
            setProduct(data.products),
            setLoading(false);
        });
    }, []);

    if (loading) return <p>Loading products...</p>;

    return (
        <div>
            <h2>Product List</h2>
            {
                products.map((p) => (
                    <ProductCard key={p.id} product={p} onClick={setSelectedProduct} />
                ))
            }

            <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </div>
    );
};

export default ProductList;