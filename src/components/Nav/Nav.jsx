import React from 'react'
import { pokeball } from '../../images'
import { Link } from 'react-router-dom'

function Nav({children, className}) {
  return (
    <nav className={className}>
        <h1>{children}</h1>
        <Link to="/pokemon-list-app/"><img className='nav-image' src={pokeball} alt="pokeball" /></Link>
    </nav>
  )
}

export default Nav