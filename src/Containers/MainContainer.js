import React, {useEffect, useState} from 'react'
import Main from "../Components/Main/Main"
import HeaderContainer from "../Containers/HeaderContainer"




export default function MainContainer() {

    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [first, setFirst] = useState(1)
    const [next, setNext] = useState(20)

    let pokemonArray = []


   const fetchPokemons = async () => {
    
    for(let i = first; i <= next; i ++) {
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


    useEffect(()=>{
        getPokemonData()
        fetchPokemons()
        setLoading(false)
    }, [first])

    /* Pagination */

    function prevPage () {
        setLoading(true)
        pokemonArray = []
        setPokemon([])
        setFirst(first - 20)
        setNext(next - 20)
    }

    function firstPage () {
        setLoading(true)
        pokemonArray = []
        setPokemon([])
        setFirst(1)
        setNext(20)
    }

    function nextPage () {
        setLoading(true)
        pokemonArray = []
        setPokemon([])
        setFirst(first + 20)
        setNext(next + 20)
}



    return (
        <div>
            <HeaderContainer/>
            {!loading ? 
                <Main.Wrap>
                    <Main.Button disabled={first === 1} onClick={prevPage}>Prev</Main.Button>
                    {first > 20 && <Main.Button onClick={firstPage}>First</Main.Button>}
                    <Main.Button disabled={next >= 151} onClick={nextPage}>Next</Main.Button>
                </Main.Wrap>
                : null}
            {loading ? <Main.Title>Loading...</Main.Title> : 
            <Main.Wrapper>
              {pokemon.map(pok => (
                  <Main.Link to={`/pokemon-fetch-app/pokemon/${pok.name}`} key={pok.id}>
                    <Main.Card>
                        <Main.CardImage src={pok.sprites.front_default}/>
                        <Main.CardTitle>{pok.name}</Main.CardTitle>
                    </Main.Card>
                  </Main.Link>
              ))}
            </Main.Wrapper>}
        </div>
    )
}
