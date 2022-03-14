import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

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

  const loadMore = () => {
    
  }

  useEffect(() => {
      getData()
  }, [])
  
  return (
    <div>
    <div className='card_list'>
      {pokemons.map((pokemon, i) => {
        return (
          <Card pokemon={pokemon} id={i} key={i}/>
        )
      })}
      </div>
      <button onClick={loadMore} className='load_more'>Load more...</button>
    </div>
  )
}

export default CardList

