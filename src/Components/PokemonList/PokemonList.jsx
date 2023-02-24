import React from "react";
import Pokemons from "./Pokemons";


const PokemonList = () => {
    return (
    <div style={{display:"flex"}}>
        <Pokemons type="water"></Pokemons>
        <Pokemons type="air"></Pokemons>
        <Pokemons type="fire"></Pokemons>
        <Pokemons type="electric"></Pokemons>
    </div>
    );
};

export default PokemonList;
