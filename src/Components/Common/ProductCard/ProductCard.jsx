import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ e, updateProductById, deleteProductById }) => {
  return (
    <div>
      <div style={{ border: "2px solid white", alignItems: "center" }}>
        <h2>{e.name}</h2>
        <h2>{e.price}</h2>
        <img src={e.img} style={{ width: "200px", height: "200px" }}></img>
        <div>
          <button onClick={() => deleteProductById(e.id)}>
            Eliminar producto
          </button>
          <button onClick={() => updateProductById(e.id)}>Editar</button>
          <Link to={`/product-detail/${e.id}`}>
            <button>Ver detalle</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
