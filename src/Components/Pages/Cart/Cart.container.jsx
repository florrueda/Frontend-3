import React, { useContext, useEffect } from "react";
import { CartContextReducer } from "../../../Context/CartContextReducer";
import Swal from 'sweetalert2'



const CartContainer = () => {
  const { state, dispatch } = useContext(CartContextReducer);

  useEffect(()=> {
    dispatch({type:'GET_TOTAL_PRICE'})
  },[state.cart])

  const limpiarCarrito = () => {
    Swal.fire({
      title: 'Seguro quieres limpiar el carrito?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si, seguro',
      denyButtonText: `No, me arrepiento`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('El carrito se limpio con exito', '', 'success')
        dispatch({type:'CLEAR_CART'})
      } else if (result.isDenied) {
        Swal.fire('El carrito sigue igual', '', 'info')
      }
    })
  }

  return (
    <div>
      <h1>Estoy en el carrito</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection:'column', justifyContent: "center"}}>
          {state.cart.map((product) => (
            <div
              key={product.id}
              style={{
                border: "2px solid white",
                display:'flex',
                alignItems:'center'
              }}
            >
              <h3>{product.name}</h3>
              <h3>${product.price}</h3>
              <h3>Cantidad: {product.quantity}</h3>
              <img src={product.img} style={{ width: "50%" }}></img>
              <button style={{border: '1px solid red', height:'50%'}} onClick={()=>dispatch({type:'DELETE_BY_ID', payload:product.id})}>Eliminar producto</button>
            </div>
          ))}
        </div>
        <div>
            <h3>El total del carrito es:{state.totalPrice}</h3>
            <button onClick={limpiarCarrito}>Vaciar carrito</button>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
