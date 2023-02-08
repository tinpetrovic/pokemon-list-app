import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

function Nav({children, className}) {
  const [darkTheme, setDarkTheme] = useContext(ThemeContext)

  return (
    <nav className={className}>
         <h1>{children}</h1>
        {
          darkTheme ? <BsFillSunFill className="theme-icon" onClick={() => setDarkTheme(false)} /> : <BsFillMoonFill   className="theme-icon" onClick={() => setDarkTheme(true)} />
        }
    </nav>
  )
}

export default Nav