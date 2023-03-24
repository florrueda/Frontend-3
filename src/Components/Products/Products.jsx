import React from 'react';

const Products = ({updateProductById, deleteProductById, handleChange, handleSubmit, items}) => {
    return (
        <div>
            <div>
            <h1>Products</h1>
            {items.map(e => (
                <div key={e.id} style={{border: '2px solid white', display:'flex'}}>
                    <h2>{e.name}</h2>
                    <h2>{e.price}</h2>
                    <img src={e.img} style={{width:'200px', height:'200px'}}></img>
                    <button onClick={() => deleteProductById(e.id)}>Eliminar producto</button>
                    <button onClick={() => updateProductById(e.id)}>Editar</button>
                </div>
            ))}

            <form action='' onSubmit={handleSubmit} style={{display:'flex', flexDirection: 'column'}}>
                <input type='text' name='name' placeholder='nombre del producto' onChange={handleChange}></input>
                <input type='text' name='price' placeholder='precio del producto' onChange={handleChange}></input>
                <input type='text' name='img' placeholder='url del producto' onChange={handleChange}></input>
                <button type='submit'>Crear</button>
            </form>
        </div>
        </div>
    );
}

export default Products;
