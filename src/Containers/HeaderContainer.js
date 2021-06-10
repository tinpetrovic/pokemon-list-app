import React from 'react'
import Header from "../Components/Header/Header"

export default function HeaderContainer() {
    return (
        <div>
            <Header.Container>
                <Header.Title>React Pokemon App</Header.Title>
                <Header.Link to="/pokemon-fetch-app">To Landing Page</Header.Link>
            </Header.Container>
        </div>
    )
}
