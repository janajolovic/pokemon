import React from 'react'

export interface Props {
  pokemon: string,
}

const Card = (props: Props) => {
  return (
    <div className='card'>
        <img src={`https://img.pokemondb.net/artwork/large/${props.pokemon}.jpg`} alt="" />
    </div>
  )
}

export default Card