import React, { useState, useEffect } from 'react'
import Pokemon from './Pokemon'
import axios from 'axios'
import Pagination from './Pagination'

function App() {
  const [pokemon, setPokemon] = useState(['aggron', 'luxray'])
  const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPage, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
    // .then(res => console.log(res))
    .then(res => {
      console.log(res)
      setLoading(false)
      setNextPage(res.data.next)
      setPrevPage(res.data.previous)
      setPokemon(prevPokemon => prevPokemon = res.data.results)
      console.log(pokemon)
    })
    .then(() => {
      console.log(pokemon)
      pokemon.forEach(pokemon => {
        axios.get(pokemon.url)
          .then(res => console.log(res))
      })
    })

    return () => cancel()
  }, [currentPage])

  console.log(pokemon)

  function goToNextPage() {
    setCurrentPage(nextPage)
  }
  
  function goToPrevPage() {
    setCurrentPage(prevPage)
  }

  if (loading) return "Loading..."

  // console.log(pokemon)
  return (
    <>
      {/* <Pokemon pokemon={pokemon} setPokemon={setPokemon}/> */}
      <Pagination 
      goToNextPage={nextPage ? goToNextPage: null}
      goToPrevPage={prevPage ? goToPrevPage : null}
      />
    </>
  );
}

export default App;
