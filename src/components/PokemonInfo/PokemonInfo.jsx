import React, { useState, useEffect, useContext } from 'react'
import PokeCarousel from './Carousel/PokeCarousel'
import { useParams } from 'react-router-dom'
import Nav from '../Nav/Nav'
import { cardStyles } from '../../styles/cardStyles'
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap'
import { ThemeContext } from '../../context/ThemeContext'

function PokemonInfo() {
  const { pokemonId } = useParams()
  const [pokemon, setPokemon] = useState({})
  const [pokemonMoves, setPokemonMoves] = useState([])
  const [darkTheme] = useContext(ThemeContext)
  const [movesOffset, setMovesOffset] = useState({start:0, end: 20})
  let ignore = false
  
  const getPokemonMoves = (moves) => {
    let pokemonMovesArr = moves && moves.slice(movesOffset.start, movesOffset.end)
    setPokemonMoves(pokemonMovesArr)
  }
  


  const getPokemonData = async (id) => {
    const API = `https://pokeapi.co/api/v2/pokemon/${id}` 
    const res = await fetch (API)
    const data = await res.json()
    setPokemon(data)
    getPokemonMoves(data.moves)
  }

  useEffect(() => {
    if(!ignore) {
      getPokemonData(pokemonId)
    }
    return () => {
      ignore = true
    }
  }, [movesOffset])



  const handleNext = () => {
    if(movesOffset.end < pokemon.moves.length || movesOffset.start < pokemon.moves.length - 20) {
      setPokemonMoves([])
      setMovesOffset({start: movesOffset.start + 20, end: movesOffset.end + 20})
    }
  }

  const handlePrev = () => {
    if(movesOffset.end >= 40 || movesOffset.start > 20) {
      setPokemonMoves([])
      setMovesOffset({start: movesOffset.start - 20, end: movesOffset.end - 20})
    }
  }

  return (
    <div className={darkTheme ? "bg-dark text-light" : "bg-light text-light"}>
      <Nav className={pokemon.types && cardStyles(pokemon.types)}>{pokemon.name}</Nav>
      
      {
          pokemon.sprites && 
          <PokeCarousel pokemon={pokemon} />
      }

      <Container>
        <Row className="justify-content-center p-2">
          <h3 className={darkTheme ? "text-light text-center mb-3" : "text-dark text-center mb-3"}>Moves <span className='move-count'>{pokemon.moves && pokemon.moves.length}</span></h3>
          {
            pokemonMoves.length !== 0 ?
            pokemonMoves.map((move, i) => {
              return (
                <Col key={i} md={3} sm={12} className={`${cardStyles(pokemon.types)} mb-3 me-2 rounded d-flex flex-md-column justify-content-between`}>
                  <div>Name: <span className='move-name'>{move.move.name}</span></div>
                  <div>
                    Learned at level: {move.version_group_details[0].level_learned_at}
                  </div>
                </Col>
              )
            })
            :
            <div className="pokemon-info--spinner-wrapper d-flex justify-content-center align-items-center">
              <Spinner animation="border" variant="primary" className="pokemon-info--spinner me-3"/>
              <p className='large text-primary'>Loading...</p>
            </div>
          }
        </Row>
        <Row className='flex-row justify-content-center mb-4'>
          <Button className='w-25' variant={darkTheme ? "outline-light" : "outline-secondary"} onClick={handlePrev} disabled={movesOffset.start < 20}>Prev</Button>
          <Button className='w-25' variant={darkTheme ? "outline-light" : "outline-secondary"} onClick={handleNext} disabled={pokemon.moves && movesOffset.end >= pokemon.moves.length - 20}>Next</Button>
        </Row>
    </Container>

    </div>
  )
}

export default PokemonInfo