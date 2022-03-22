import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Pokemon({ pokemon }) {
    const [sprites, setSprites] = useState([])
    console.log(pokemon)
    
    // axios.get(pokemon[0].url)
    //     .then(res => setSprites(res.data.sprites.front_shiny))

    useEffect(() => {
        pokemon.forEach(p => (
            // console.log(p.url)
            //   <div key={p.name}>{p.url}</div>
            axios.get(p.url)
                .then(res => setSprites(prevSprites => [...prevSprites, res.data.sprites.front_shiny]))
                // .then(console.log(...sprites))
          ))
    }, [pokemon])

    const pokeJSX = sprites.map(s => {
        return (
            <img src={s} key={s} alt='poke pic'/>
        )
    })
    return (
        <div>
            {pokeJSX}
        </div>
    )
}
