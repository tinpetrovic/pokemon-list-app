import React, {useState, useEffect} from "react";
import "./main.scss";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";



export default function Main() {
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [firstPokemon, setFirstPokemon] = useState(1)
    const [lastPokemon, setLastPokemon] = useState(20)
    let pokemonArray = []

    const fetchPokemon = async () => {
        for(let i = firstPokemon; i <= lastPokemon; i ++) {
            if (i >= 152) {break}
            pokemonArray.push(await getPokemonData(i))
        }
            setPokemon(pokemonArray)
            setLoading(false)
    }

    const getPokemonData = async (id) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        return data
    }

    
    useEffect(() => {
        let canceled = false
        setLoading(true)
        if (!canceled) {
            getPokemonData()
            fetchPokemon()
            setLoading(false)
    
        }
        return () => (canceled = true)
    },[firstPokemon])
    
return (
        <div className="main-container">
            {!loading && 
            <Pagination
            firstPokemon={firstPokemon}
            lastPokemon={lastPokemon} 
            setLoading={setLoading}
            setPokemon={setPokemon}
            setFirstPokemon={setFirstPokemon}
            setLastPokemon={setLastPokemon}
            pokemonArray={pokemonArray}
            pokemon={pokemon}
            />}
            <div className="main-wrapper">
              {loading ? <div className="text-container"><h2>Loading...</h2></div> :  
                  pokemon.map((poke,i) => {
                    return <Card
                    key={poke.id} 
                    poke={poke}
                    i={i}
                    />
                  })}
            </div>         
        </div>
    )
}