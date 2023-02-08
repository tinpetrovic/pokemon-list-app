import React, { createContext, useState } from "react"

const FetchContext = createContext()

function FetchContextProvider({children}) {
    const [pageOffset, setPageOffset] = useState(0)
    
    return (
        <FetchContext.Provider value={[pageOffset, setPageOffset]}>
            {children}
        </FetchContext.Provider>
    )
}

export {FetchContext, FetchContextProvider}