import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from "axios"

const CardList = () => {

  let [pokemons, setPokemons] = useState([])

  const getData = async () => {
    try {
        let res: any = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
        setPokemons(res.data.results)
    } catch (err) {
        console.log(err)
    }
  }

  useEffect(() => {
      getData()
  }, [])
  
  return (
    <div className='card_list'>
      {pokemons.map((pokemon, i) => {
        return (
          <Card pokemon={pokemon} id={i} key={i}/>
        )
      })}
    </div>
  )
}

export default CardList

