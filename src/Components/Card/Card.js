import React from "react";
import { Link, useParams } from "react-router-dom";
import "./card.scss";


export default function Card({poke, i}) {
    const {pokemonid} = useParams()

    const styles =  poke.types[0].type.name === "poison" ?  "#b3ffb3" :
                    poke.types[0].type.name === "fire" ?  "#ff9999" :
                    poke.types[0].type.name === "bug" ?  "#b3ffb3" :
                    poke.types[0].type.name === "grass" ?  "#b3ffb3" : 
                    poke.types[0].type.name === "water" ?  "#b3d9ff" : 
                    poke.types[0].type.name === "ice" ?  "#b3d9ff" :
                    poke.types[0].type.name === "electric" ?  "#ffff66" :
                    poke.types[0].type.name === "ground" ?  "#e6ccb3" :
                    poke.types[0].type.name === "rock" ?  "#e6ccb3" :
                    poke.types[0].type.name === "fighting" ?  "#e6ccb3" :
                    poke.types[0].type.name === "fairy" ?  "#f2f2f2" :
                    poke.types[0].type.name === "dragon" ?  "#f2f2f2" :
                    poke.types[0].type.name === "psychic" ?  "#cc99ff" :
                    poke.types[0].type.name === "ghost" ?  "#cc99ff" :
                    poke.types[0].type.name === "normal" ?  "#f2f2f2" : "#fff"
  

return (
        <div className="card-container">
            <div className="card-wrapper" style={{ backgroundColor: `${styles}`}}>
                <Link className="card-link" to={`/pokemon-fetch-app/${poke.name}`}>
                    <p>{`ID: ${poke.id}.`}</p>
                    {poke.sprites && 
                    <img src={poke.sprites.front_default} alt={poke.name} />
                    }
                    <h2>{poke.name}</h2>
                    <p>Type: {poke.types[0].type.name}</p>
                </Link>
            </div>
        </div>
    )
}