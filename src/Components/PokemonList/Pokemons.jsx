import React from "react";
import pokemonsJson from "../../../pokemons.json";
import PokemonCard from "./PokemonCard";

const Pokemons = ({type}) => {

    let pokemonsByType = pokemonsJson[type]

    function style () {
        if(type === "water") {
            return {backgroundColor: 'grey'}
        } else if (type === "fire"){
            return {backgroundColor: 'tomato'}
        } else if(type === 'air') {
            return {backgroundColor: 'green'}
        } else {
            return {backgroundColor: 'pink'}
        }
    } 

    return (
        <div style={style()}>
            {pokemonsByType.map((pokemon) => {
                return (
                <PokemonCard pokemon={pokemon} key={pokemon.id} />
                )
            })}
        </div>
    )

};

export default Pokemons;
