import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png" alt="" />
        <Link style={{color: "white", textDecoration: "none", fontSize: '30px'}} to="/">Pokemon</Link>
    </div>
  )
}

export default Header