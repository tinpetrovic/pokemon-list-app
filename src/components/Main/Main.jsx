import React, {useContext, useEffect, useState} from 'react'
import Pages from '../Pages/Pages'
import { FetchContext } from '../../context/FetchContext'
import Nav from '../Nav/Nav'
import PokemonCard from '../PokemonCard/PokemonCard'
import { Col, Container, Row, Spinner } from 'react-bootstrap'


function Main() {
  const [pageOffset] = useContext(FetchContext)
  const [pokemonList, setPokemonList] = useState([])
  let ignore = false
  
  const API = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pageOffset}` 

  const fetchPokemon = async () => {
    const res = await fetch(API)
    const { results } = await res.json()
    let pokeArray = []

    const fetchPokemonData = async (array) => {
      for(let i = 0; i < array.length; i++) {
        const res = await fetch(array[i].url)
        const data = await res.json()
        pokeArray.push(data)
      }
      setPokemonList(pokeArray)
    }
    if (!ignore) {
      fetchPokemonData(results)
    }  
}

useEffect(() => {
  fetchPokemon()

  return () => {
    ignore = true
  }
}, [pageOffset])

  return (
    <main>
      <Nav className="main-nav">
        Pokemon Fetch App
      </Nav>  
      { 
      pokemonList.length === 0 ?
        <div className="spinner-wrapper">
          <Spinner animation="border" variant="primary" className="spinner"/>
          <p className='large text-primary'>Loading...</p>
        </div>
      :
        <Container>
          <Row>
            {
              pokemonList.map((pokemon, index) => {
                return (
                  <Col 
                  key={index} 
                  className="mb-3" 
                  md="6"
                  lg="4"
                  >
                    <PokemonCard
                    pokemonList={pokemonList}
                    pokemon={pokemon}
                    />
                  </Col>
                  )
              })
            }
            <Pages 
            setPokemonList={setPokemonList}
            />
          </Row>
        </Container>
      }
    </main>
  )
}

export default Main