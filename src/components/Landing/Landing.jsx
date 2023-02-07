import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from 'react-bootstrap'
import { pokeball } from '../../images'

function Landing() {
  return (
    <div className='landing-container d-flex justify-content-center align-items-center'>
        <Card className="pokeball-wrapper w-75 text-center">
          <Card.Body className="d-flex flex-column justify-content-between align-items-center">
          <Card.Title className="card-title">Pokemon List App</Card.Title>
          <Link to="/pokemon-list-app/pokemon">
            <Image  className='pokeball-image fluid' src={pokeball} />
          </Link>
            <Card.Text className="card-text">Click Pokeball to Enter!</Card.Text>
          </Card.Body>
        </Card>
    </div>
  )
}

export default Landing