import React, { useContext } from 'react'
import { pokeball } from '../../images'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { ThemeContext } from '../../context/ThemeContext'
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

function Nav({children, className}) {
  const [darkTheme, setDarkTheme] = useContext(ThemeContext)

  return (
    <nav className={className}>
        {
          darkTheme ? <BsFillSunFill className="theme-icon" onClick={() => setDarkTheme(false)} /> : <BsFillMoonFill   className="theme-icon" onClick={() => setDarkTheme(true)} />
        }
        <h1>{children}</h1>
        <Link to="/pokemon-list-app/"><img className='nav-image' src={pokeball} alt="pokeball" /></Link>
    </nav>
  )
}

export default Nav