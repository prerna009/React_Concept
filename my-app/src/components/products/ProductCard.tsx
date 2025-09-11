import type React from "react";
import type { Product } from "../../interfaces/Product";

interface Props {
    product: Product;
    onClick: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, onClick }) => {
    return (
        <div style={{ 
            margin: '8px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
        }}>
           <h3 style={{ cursor: 'pointer' }} onClick={() => onClick(product)}>{product.title}</h3> 
           <p>{product.description}</p>
        </div>
    );
};

export default ProductCard;