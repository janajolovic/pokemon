import React, {useState, useEffect} from 'react'
import axios, { AxiosResponse } from 'axios'
import { useParams } from 'react-router-dom'
import PokemonInterface from './PokemonInterface'

const Pokemon = () => {
  const [pokemon, setPokemon] = useState<PokemonInterface>({
      name: "",
      id: 0
  })

  const pokemon_name = useParams().name;
  const getPokemon = async () => {
    try { 
      let res: AxiosResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
      console.log(res.data)
      setPokemon({name: res.data.name, id: res.data.id})
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getPokemon()
}, [])

  return (
    <div className='pokemonCard'>
        {/* <img src={pokemon.sprites.other.dream_world.front_default} alt="" /> */}
        <div>
            {/* {console.log(pokemon.sprites?.other)} */}
            <h1>{pokemon.name}</h1>
            {/* <h3>Height: {pokemon.height}</h3> */}
            {/* <h3>Weight: {pokemon.weight}</h3> */}
        </div>
    </div>
  )
}

export default Pokemon