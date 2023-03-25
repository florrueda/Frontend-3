import React, {useState} from "react";

const CreateProduct = ({handleChange, handleSubmit}) => {
  
  return (
    <div>
      <h1>Crear un nuevo producto</h1>
      <form
        action=""
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          type="text"
          name="name"
          placeholder="nombre del producto"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="price"
          placeholder="precio del producto"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="img"
          placeholder="url del producto"
          onChange={handleChange}
        ></input>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CreateProduct;
