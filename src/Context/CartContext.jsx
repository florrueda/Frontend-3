import React, {createContext, useState} from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart);

    const isInCart = (id) => {
        let exist = cart.some((element) => element.id === id)
        return exist
    }

    const addToCart = (item) => {
        if(isInCart(item.id)) {
            let newArr = cart.map((element) => {
                if(element.id === item.id) {
                    return {
                        ...element, quantity: element.quantity + item.quantity
                    }
                } else {
                    return element
                }
            })
            setCart(newArr);
        } else {
            setCart([...cart, item])
        }
        
    }

    const clearCart = () => {
        setCart([])
    }

    const deleteProduct = () => {
        console.log("Eliminaste el producto del carrito");
    }

    const getTotalPrice = () => {
        let total = cart.reduce((acc, element) => {
            return acc + (element.price * element.quantity)
        }, 0)

        return total
        
    }

    return (
        <div>
            <CartContext.Provider value={{cart, clearCart, addToCart, deleteProduct, getTotalPrice}}>
                {children}
            </CartContext.Provider>
        </div>
    );
}

export default CartContextProvider;
