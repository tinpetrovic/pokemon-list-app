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
      setPageOffset(pageOffset - 20)
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
      <Pagination.First disabled={pageOffset === 0} onClick={hadleFirst}>First</Pagination.First>
      <Pagination.Prev disabled={pageOffset === 0} onClick={handlePrev}>Prev</Pagination.Prev>
      <Pagination.Next disabled={pageOffset > 150} onClick={handleNext}>Next</Pagination.Next>
      <Pagination.Last disabled={pageOffset === 151} onClick={handleLast}>Last</Pagination.Last>
    </Pagination>
  )
}

export default Pages