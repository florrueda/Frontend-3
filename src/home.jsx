import React from 'react';
import estilos from './Home.module.css'


const Home = ({isDark}) => {
    return (
        <div className={isDark ? estilos.dark : estilos.light}>
            <h1 className={estilos.titleHome}>Este es el home</h1>
            <p>Descripcion</p>
        </div>
    );
}

export default Home;
