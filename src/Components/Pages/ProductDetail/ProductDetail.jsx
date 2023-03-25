import React from 'react';

const ProductDetail = ({product}) => {
    return (
        <div>
            <h1>Product Detail</h1>
            <div style={{border: '2px solid white'}}>
                    <h2>{product.name}</h2>
                    <h2>{product.price}</h2>
                    <img src={product.img} style={{width:'200px', height:'200px'}}></img>
                    <p>{product.description}</p>
                </div>
        </div>
    );
}

export default ProductDetail;
