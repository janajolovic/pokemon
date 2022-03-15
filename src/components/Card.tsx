import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { useNavigate } from 'react-router-dom'

export interface Props {
  pokemon: any,
  id: number
}

const Card = (props: Props) => {
  let [name, setName] = useState<string>("")
  let navigate = useNavigate();

  const getPokemon = () => {
    navigate(`/${name}`)
  }

  const [pokemonType, setPokemonType] = useState<string[]>([])
  const getPokemonType = async () => {
    try { 
      let res: AxiosResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.id + 1}`)
      let data = res.data
      setName(data.name)
      setPokemonType(data.types.map((el: any) => {return el.type.name}))
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getPokemonType()
}, [])

  return (
    <div className={`card ${pokemonType[0]}`} onClick={getPokemon}>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.id + 1}.svg`} alt="" />
      <h1>{name}</h1>
    </div>
  )
}

export default Card