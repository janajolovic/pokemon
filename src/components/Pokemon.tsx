import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([])

  const pokemon_name = useParams()
  const getPokemon = async () => {
    try { 
      let res: any = await axios.get("")
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
    <div>Pokemon</div>
  )
}

export default Pokemon