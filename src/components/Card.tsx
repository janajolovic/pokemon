import React from 'react'

export interface Props {
  pokemon: any,
  id: number
}

const Card = (props: Props) => {
  return (
    <div className='card'>
      {console.log(props.pokemon.name)}
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.id + 1}.svg`} alt="" />
      <h1>{props.pokemon.name}</h1>
    </div>
  )
}

export default Card