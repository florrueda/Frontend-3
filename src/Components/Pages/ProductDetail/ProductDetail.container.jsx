import React, {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail';
import {useParams} from 'react-router-dom'
import { getProductById } from "../../../services/ProductsService";


const ProductDetailContainer = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({})


    useEffect(() => {
        getProductById(id)
        .then(res => setProduct(res.data))
    }, []);

    return (
        <div>
            <ProductDetail product={product} />
        </div>
    );
}

export default ProductDetailContainer;
