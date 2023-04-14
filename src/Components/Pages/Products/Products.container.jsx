import React, { useState, useEffect } from "react";
import { getProducts, deleteProduct, updateProduct } from "../../../services/ProductsService";
import Products from "./Products";
import { db } from "../../../firebaseConfig";
import { getDocs, collection } from 'firebase/firestore'


const ProductsContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let refCollection = collection(db, "products")
    getDocs(refCollection)
    .then((res) => {
      const products = res.docs.map(product => {
        console.log(product);
        return {
          ...product.data(),
          id: product.id
        }
      })
      setItems(products);
    })
  }, []);

  const deleteProductById = (id) => {
    deleteProduct(id);
  };

  const updateProductById = (id) => {
    updateProduct(id,{
      price: 6000,
      name: "zapas X",
    })
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
