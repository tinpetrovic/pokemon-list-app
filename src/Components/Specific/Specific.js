import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./specific.scss";




export default function Specific() {
    const {pokemonid} = useParams()
    const [pokemonData, setPokemonData] = useState([])
    const [loading, setLoading] = useState(true)

    const getPokemonData = async (id) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await res.json()
            setPokemonData(data)
    }

    useEffect(() => {
        getPokemonData(pokemonid)
        setLoading(false)
    }, [])

    console.log(pokemonData)

return (
        <div className="specific-container">
            {loading ? <div className="text-container"><h2>Loading...</h2></div> :
            <div className="specific-wrapper">
                <h1>{pokemonData.name}</h1>
                {pokemonData.sprites && 
                <div>
                    <div className="main-img">
                        <img  src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                    </div>
                    <div className="pokemon-img-secondary">
                        <img src={pokemonData.sprites.back_default} alt={`${pokemonData.name} back`} />
                        <img src={pokemonData.sprites.front_shiny} alt={`${pokemonData.name} shiny`} />
                    </div>

                    <div className="data-cont">
                        <p>{`Type/s: ${pokemonData.types.map((type) => {
                            return `  ${type.type.name}`
                        })}`}</p>
                    </div>

                    <div className="data-cont height">
                        <p>Height: {pokemonData.height}</p>
                        <p>Weight: {pokemonData.weight}</p>
                    </div>

                    <div className="data-cont">
                        <div className="stats"><h3>Stats:</h3>{`${pokemonData.stats.map((stat) => {
                            return `  ${stat.stat.name}: ${stat.base_stat}`
                        })}`}</div>
                    </div>

                    <div className="data-cont">
                        <div className="moves"><h3>Moves:</h3>{`${pokemonData.moves.map((move) => {
                            return `${move.move.name}`
                        })}`}</div>
                    </div>


                </div>}
            </div>
            }
        </div>
    )
}