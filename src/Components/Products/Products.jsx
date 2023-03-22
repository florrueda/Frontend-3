import React,{useState, useEffect} from 'react';
import axios from 'axios'

const Products = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const productos = axios.get("http://localhost:5000/products");
                productos.then((res) => setItems(res.data))
                            .catch((err) => console.log(err))
    }, []);

    return (
        <div>
            <h1>Products</h1>
            {items.map(e => <h2 key={e.id}>{e.name}</h2>)}
        
        </div>
    );
}



export default Products;
