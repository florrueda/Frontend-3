import React from "react";
import pokemonsJson from "../../../pokemons.json";
import PokemonCard from "./PokemonCard";

const Pokemons = ({type}) => {

    let pokemonsByType = pokemonsJson[type]
    
    return (
        <div>
            {pokemonsByType.map((pokemon) => {
                return (
                <PokemonCard pokemon={pokemon} key={pokemon.id} />
                )
            })}
        </div>
    )

};

export default Pokemons;
