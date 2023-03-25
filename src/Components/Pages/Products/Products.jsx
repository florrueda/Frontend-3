import React from 'react';
import { Link } from 'react-router-dom'
import ProductCard from '../../Common/ProductCard/ProductCard';

const Products = ({updateProductById, deleteProductById, items}) => {
    return (
        <div>
            <div>
            <Link to='/create-product'>
                <button>Crear nuevo producto</button>
            </Link>
            <h1>Products</h1>
            {items.map(e => (
                <ProductCard key={e.id} e={e} updateProductById={updateProductById} deleteProductById={deleteProductById} ></ProductCard>
            ))}

            
        </div>
        </div>
    );
}

export default Products;
