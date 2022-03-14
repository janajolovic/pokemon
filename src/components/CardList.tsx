import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from "axios"

const CardList = () => {

  let [pokemons, setPokemons] = useState([])
  let [page, setPage] = useState(0)

  const getData = async () => {
    try {
        let res: any = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`)
        console.log(res.data)
        setPokemons((prevState) => {
          if (prevState) {
            return [
              ...prevState, ...res.data.results 
            ]
          } else return res.data.results
        })
    } catch (err) {
        console.log(err)
    }
  }

  const loadMore = () => {
    setPage(prevState => prevState + 10)
    getData()
  }

  useEffect(() => {
      getData()
  }, [])
  
  return (
    <div>
    <div className='card_list'>
      {pokemons? pokemons.map((pokemon, i) => {
        return (
          <Card pokemon={pokemon} id={i} key={i}/>
        )
      }) : "no results"}
      </div>
      <button onClick={loadMore} className='load_more'>Load more...</button>
    </div>
  )
}

export default CardList

