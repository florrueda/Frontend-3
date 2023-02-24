import React from 'react'

const PokemonCard = ({pokemon}) => {

  return (
    <>
      <div style={{fontSize:'15px'}}>
        <h1>{pokemon.name}</h1>
        <h2>Su nivel de poder es: {pokemon.powerLevel}</h2>
        <h2>{pokemon.agressive ? "Es agresivo" : "No es agresivo"}</h2>
        <img src={pokemon.avatar} style={{width:'60px'}} alt="" />
      </div> 
    </>
  )
}

export default PokemonCard