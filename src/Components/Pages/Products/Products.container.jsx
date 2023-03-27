import React, { useState, useEffect } from "react";
import { getProducts, deleteProduct, updateProduct } from "../../../services/ProductsService";
import Products from "./Products";

const ProductsContainer = () => {
  const [items, setItems] = useState([]);

  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    setIsChanged(false);
    const productos = getProducts();
    productos
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, [isChanged]);

  const deleteProductById = (id) => {
    deleteProduct(id);
    setIsChanged(true);
  };

  const updateProductById = (id) => {
    updateProduct(id,{
      price: 6000,
      name: "zapas X",
    })
    setIsChanged(true);
  };

  return (
    <div>
      <Products
        updateProductById={updateProductById}
        deleteProductById={deleteProductById}
        items={items}
      ></Products>
    </div>
  );
};

export default ProductsContainer;
