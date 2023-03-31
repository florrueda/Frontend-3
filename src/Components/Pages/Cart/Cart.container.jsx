import React, { useContext, useEffect } from "react";
import { CartContextReducer } from "../../../Context/CartContextReducer";

const CartContainer = () => {
  const { state, dispatch } = useContext(CartContextReducer);

  useEffect(()=> {
    dispatch({type:'GET_TOTAL_PRICE'})
  },[])

  return (
    <div>
      <h1>Estoy en el carrito</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <div style={{ display: "flex", justifyContent: "center" }}>
          {cart.map((product) => (
            <div
              key={product.id}
              style={{
                width: "200px",
                height: "300px",
                border: "2px solid white",
              }}
            >
              <h3>{product.name}</h3>
              <h3>{product.price}</h3>
              <img src={product.img} style={{ width: "50%" }}></img>
            </div>
          ))}
        </div> */}
        <div>
            <h3>El total del carrito es:{state.totalPrice}</h3>
            <button onClick={()=> dispatch({type: 'CLEAR_CART'})}>Vaciar carrito</button>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
