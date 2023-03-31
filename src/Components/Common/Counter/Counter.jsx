import React, {useState, useContext} from 'react';
import { CartContextReducer } from '../../../Context/CartContextReducer';

const Counter = ({ product}) => {
    const [counter, setCounter] = useState(1);
    const {dispatch} = useContext(CartContextReducer)

    const addProducts = () => {
        let object = {...product, quantity: counter}
        dispatch({type: 'ADD_TO_CART', payload: object})
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
