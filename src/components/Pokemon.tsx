import React, {useState, useEffect} from 'react'
import axios, { AxiosResponse } from 'axios'
import { useParams } from 'react-router-dom'
import PokemonInterface from './PokemonInterface'

const Pokemon = () => {
  const [pokemon, setPokemon] = useState<PokemonInterface>({
      name: "",
      id: 0,
      height: 0,
      weight: 0,
      types: ["normal"]
  })

  const pokemon_name = useParams().name;
  const getPokemon = async () => {
    try { 
      let res: AxiosResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
      console.log(res.data)
      let data = res.data
      setPokemon({ 
        name: data.name, 
        id: data.id,
        height: data.height,
        weight: data.weight,
        types: data.types.map((el: any) => {return el.type.name})
    })
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getPokemon()
}, [])

  return (
    <div className={`pokemon_card ${pokemon.types? pokemon.types[0]: "normal"}`}>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="" />
        <div className='pokemon_info'>
            <h1>{pokemon.name}</h1>
            <h3>Height: {pokemon.height}</h3>
            <h3>Weight: {pokemon.weight}</h3>
            <h3>Types: {pokemon.types?.toString()}</h3>
        </div>
    </div>
  )
}

export default Pokemon