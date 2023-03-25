import React, {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail';
import {useParams} from 'react-router-dom'
import axios from 'axios';

const ProductDetailContainer = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
        .then(res => setProduct(res.data))
    }, []);

    return (
        <div>
            <ProductDetail product={product} />
        </div>
    );
}

export default ProductDetailContainer;
