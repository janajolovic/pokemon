import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pokemon from './Pokemon'
import { useNavigate } from 'react-router-dom'

export interface Props {
  pokemon: any,
  id: number
}

const Card = (props: Props) => {
  let navigate = useNavigate();

  const getPokemon = () => {
    navigate(`/${props.pokemon.name}`)
  }

  return (
    <div className='card fire' onClick={getPokemon}>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.id + 1}.svg`} alt="" />
      <h1>{props.pokemon.name}</h1>

      {/* <div className="card__overlay">
        <div className="overlay__text">
          <h1>{props.pokemon.name}</h1>
        </div>
      </div> */}
    </div>
  )
}

export default Card