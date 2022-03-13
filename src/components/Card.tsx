import React, { useEffect, useState } from 'react'
import axios from 'axios'

export interface Props {
  pokemon: any,
  id: number
}

const Card = (props: Props) => {

  const [pokemon, setPokemon] = useState()

  const getPokemon = async () => {
    try { 
      let res: any = await axios.get(props.pokemon.url)
      console.log(res.data)
      setPokemon(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <div className='card fire'>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.id + 1}.svg`} alt="" />
      <h1>{props.pokemon.name}</h1>

      <div className="card__overlay">
        <div className="overlay__text">
          <h1>{props.pokemon.name}</h1>
        </div>
      </div>
    </div>
  )
}

export default Card