import React from "react";
import "./pagination.scss";



export default function Pagination({pokemon, firstPokemon, lastPokemon, setPokemon, setFirstPokemon, setLastPokemon, pokemonArray}) {
    const nextPage = () => {
        pokemonArray = []
        setPokemon([])
        setFirstPokemon(firstPokemon + 20)
        setLastPokemon(lastPokemon + 20)
        console.log(pokemon)
    }

    const prevPage = () => {
        pokemonArray = []
        setPokemon([])
        setFirstPokemon(firstPokemon - 20)
        setLastPokemon(lastPokemon - 20)
    }

    const firstPage = () => {
        pokemonArray = []
        setPokemon([])
        setFirstPokemon(1)
        setLastPokemon(20)
    }

    



return (
        <div className="pagination-container">
            <div className="pagination-wrapper">
                <h3>Pages:</h3>
                <div className="page-btn-container">
                    <button className="btn prev-btn" disabled={firstPokemon === 1} onClick={prevPage}>PREV</button>
                    {firstPokemon > 40 && <button className="btn first-btn" onClick={firstPage}>FIRST</button>}
                    <button className="btn nest-btn" disabled={lastPokemon > 150} onClick={nextPage}>NEXT</button>
                </div>
            </div>
        </div>
    )
}