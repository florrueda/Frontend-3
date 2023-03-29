import React, { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

const CartContainer = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);

  return (
    <div>
      <h1>Estoy en el carrito</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
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
        </div>
        <div>
            <h3>El total del carrito es: {getTotalPrice()}</h3>
            <button onClick={clearCart}>Vaciar carrito</button>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
