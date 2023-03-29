import React, {useState, useContext} from 'react';
import { CartContext } from '../../../Context/CartContext';

const Counter = ({ product}) => {
    const [counter, setCounter] = useState(1);
    const {addToCart} = useContext(CartContext)

    const addProducts = () => {
        let object = {...product, quantity: counter}
        addToCart(object)
    }

    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <button onClick={()=> setCounter(counter-1)}>-</button>
            <h3>{counter}</h3>
            <button onClick={()=> setCounter(counter+1)}>+</button>

            <button onClick={addProducts}>Agregar al carrito</button>
        </div>
    );
}

export default Counter;
