import React, { useState, useEffect } from 'react'
import Pokemon from './Pokemon'
import axios from 'axios'

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
    }).then(res => {
      setLoading(false)
      setNextPage(res.data.next)
      setPrevPage(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    })

    return () => cancel()
  }, [currentPage])

  if (loading) return "Loading..."

  return (
    <Pokemon pokemon={pokemon}/>
  );
}

export default App;
