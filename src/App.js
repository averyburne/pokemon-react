import React, { useState } from 'react'
import Pokemon from './Pokemon'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState(['aggron', 'luxray'])

  axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
    setPokemon(res.data.results.map(p => p.name))
  })

  return (
    <Pokemon pokemon={pokemon}/>
  );
}

export default App;
