import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import HeaderContainer from "./HeaderContainer"
import PokemonDetails from "../Components/PokemonDetails/PokemonDetails"

export default function DetailContainer() {
    const {pokemonId} = useParams()

    const [pokemonData, setPokemonData] = useState([])
    const [loading, setLoading] = useState(true)

    const getPokemonData = async (id) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        setPokemonData(data)
    }
    
    useEffect(() => {
        getPokemonData(pokemonId)
        setLoading(false)
    }, [])


    console.log(pokemonData)
    


    return (
        <div>
            <HeaderContainer />
            <PokemonDetails.Link to="/pokemon" >Back</PokemonDetails.Link>
            {loading ? <PokemonDetails.Title>Loading</PokemonDetails.Title> : 
                <PokemonDetails.Container>
                        {pokemonData.sprites == undefined ? 
                        <PokemonDetails.Text>Loading...</PokemonDetails.Text> 
                        : 
                        <PokemonDetails.Flex>
                        <PokemonDetails.Image src={pokemonData.sprites.front_default} alt={pokemonData.name}/>
                        <PokemonDetails.Image src={pokemonData.sprites.back_default} alt={pokemonData.name}/>
                        <PokemonDetails.Image src={pokemonData.sprites.front_shiny} alt={pokemonData.name}/>
                        </PokemonDetails.Flex>}

                        <PokemonDetails.Title>{pokemonData.name}</PokemonDetails.Title>
                        
                        {pokemonData.types == undefined ? 
                        <PokemonDetails.Text>Loading...</PokemonDetails.Text> 
                        : 
                        <PokemonDetails.Text>Pokemon Type: {pokemonData.types.map(type => <span>{type.type.name} </span>)}</PokemonDetails.Text>}
                        
                        <PokemonDetails.Wrapper>
                            <PokemonDetails.SubTitle> Base Stats: </PokemonDetails.SubTitle>
                            {pokemonData.stats == undefined ? 
                            <PokemonDetails.Text>Loading...</PokemonDetails.Text> 
                            :
                            pokemonData.stats.map(stat => (
                                    <PokemonDetails.Text>{stat.stat.name}: {stat.base_stat}</PokemonDetails.Text>                          
                            ))}
                        </PokemonDetails.Wrapper>
                </PokemonDetails.Container>}
        </div>
    )
}
