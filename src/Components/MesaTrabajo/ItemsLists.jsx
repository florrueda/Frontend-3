import React from 'react';
import {products} from '../../productsMock'
import Item from './Item';

const ItemsListMesa = () => {

    return (
        <div>
            <h1>Productos</h1>
            <Item products={products}></Item>
        </div>
    );
}

export default ItemsListMesa;
