import type React from "react";
import type { Product } from "../../interfaces/Product";

interface Props {
    product: Product | null;
    onClose: () => void;
}

const ProductModal: React.FC<Props> = ({ product, onClose }) => {
    if (!product) return null;
    
    return (
        <div style={{
            background: 'rgba(0,0,0,0.6)',
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '10px'
            }}>
                <button onClick={onClose}>X</button>
                <h3>{product.title}</h3>
                <p><b>Description: </b>{product.description}</p>
                <p><b>Price: </b>{product.price}</p>
            </div>
        </div>
    )
}

export default ProductModal;