import React, { useState, useEffect } from "react";
import axios from "axios";
import Products from "./Products";

const ProductsContainer = () => {
  const [items, setItems] = useState([]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    img: "",
  });

  const [isCreated, setIsCreated] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    setIsCreated(false);
    setIsDeleted(false);
    setIsUpdated(false);
    const productos = axios.get("http://localhost:5000/products");
    productos
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, [isCreated, isDeleted, isUpdated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: newProduct.name,
      price: Number(newProduct.price),
      img: newProduct.img,
    };
    axios.post("http://localhost:5000/products", data);
    setIsCreated(true);
  };

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const deleteProductById = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`);
    setIsDeleted(true);
  };

  const updateProductById = (id) => {
    axios.patch(`http://localhost:5000/products/${id}`, {
      price: 6000,
      name: "zapas X",
    });
    setIsUpdated(true);
  };

  return (
    <Products
      updateProductById={updateProductById}
      deleteProductById={deleteProductById}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      items={items}
    ></Products>
  );
};

export default ProductsContainer;
