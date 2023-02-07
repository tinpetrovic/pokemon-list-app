import React, {useContext} from 'react'
import { Pagination } from 'react-bootstrap'
import { FetchContext } from '../../context/FetchContext'

function Pages({ setPokemonList }) {
    const [pageOffset, setPageOffset] = useContext(FetchContext)

    const handleNext = () => {
      setPokemonList([])
      setPageOffset(pageOffset + 20)
      if (pageOffset > 150) {
        setPageOffset(131)
      }
    }

    const handlePrev = () => {
      setPokemonList([]) 
      setPageOffset(pageOffset + 20)
      if (pageOffset < 20) {
        setPageOffset(0)
      }
    }

    const hadleFirst = () => {
      setPokemonList([]) 
      setPageOffset(0)
    }

    const handleLast = () => {
      setPokemonList([]) 
      setPageOffset(131)
    }

  return (
    <Pagination>
      <Pagination.First disabled={pageOffset === 0} onClick={hadleFirst}/>
      <Pagination.Prev disabled={pageOffset === 0} onClick={handlePrev}/>

      <Pagination.Item active>{1}</Pagination.Item>

      <Pagination.Next disabled={pageOffset > 150} onClick={handleNext}/>
      <Pagination.Last disabled={pageOffset === 151} onClick={handleLast} />
    </Pagination>
  )
}

export default Pages