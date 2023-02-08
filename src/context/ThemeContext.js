import React, { createContext, useState } from "react"

const ThemeContext = createContext()

function ThemeContextProvider({children}) {
    const [darkTheme, setDarkTheme] = useState(false)
    
    return (
        <ThemeContext.Provider value={[darkTheme, setDarkTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}