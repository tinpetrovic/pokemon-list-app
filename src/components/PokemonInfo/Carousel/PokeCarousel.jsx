import React from 'react'
import { Carousel } from 'react-bootstrap'

const PokeCarousel = ({pokemon}) => {
    console.log(pokemon)
  return (
    <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block"
            src={pokemon.sprites.front_default}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={pokemon.sprites.back_default}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={pokemon.sprites.front_shiny}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={pokemon.sprites.back_shiny}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
  )
}

export default PokeCarousel