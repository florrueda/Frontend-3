import React from 'react';
import {useState} from 'react'


const Cart = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const existe = cart.some((element) => element.id === item.id)
        if(!existe) {
            setCart([...cart, {...item, quantity: 1}])
        } else {
            alert('ya existe en el carrito')
        }
        
    };

    return (
        <div>
            <h2>{cart.length}</h2>
            {
                cart.map((cart) => {
                    return <div key={cart.id} style={{border: "solid 1px white"}} >
                        <h2>{cart.name}</h2>
                        <img src={cart.img} style={{width: '30%'}}/>
                        <h3>{cart.description}</h3>
                        <h3>{cart.price}</h3>
                    </div>
                })
            }
            <button onClick={() => setCart([])}>Vaciar carrito</button>
        </div>
    );
}

export default Cart;
