import React from 'react'
import { Card, ListGroup, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {cardStyles, progressVariants} from '../../styles/cardStyles'

function PokemonCard({pokemon}) {
  return (
    <Link to={`/pokemon/${pokemon.name}`} className="card-link w-sm-100 text-dark">
      <Card className={cardStyles(pokemon.types)}>
        <Card.Img className="img" variant="top" src={pokemon.sprites.front_default} />
        <Card.Body>
          <Card.Title className="card-title">{pokemon.name}</Card.Title>
            <div className='text-secondary'>
              Type: {pokemon.types.map((type, index) => {
                return (
                  <span className="text-secondary" key={index}>{type.type.name} </span>
                )
              })}
              </div>
        </Card.Body>
        
        <ListGroup className="list-group-flush">
          {pokemon.stats.map((stat, index) => {
            return (
              <ListGroup key={index} horizontal >
                <ListGroup.Item className="w-50">{stat.stat.name}</ListGroup.Item>
                <ListGroup.Item className="w-50">
                  <ProgressBar 
                  className="progress" 
                  now={stat.base_stat} 
                  max={160} 
                  label={`${stat.base_stat}`}
                  variant={progressVariants(pokemon.types)}
                  />
                </ListGroup.Item>
              </ListGroup>
            )
          })}
        </ListGroup>
      </Card>
    </Link>
  )
}

export default PokemonCard