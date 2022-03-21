import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Pokemon({ pokemon }) {
    const [sprites, setSprites] = useState([])
    const pics = []
    console.log(sprites)
    
    // axios.get(pokemon[0].url)
    //     .then(res => setSprites(res.data.sprites.front_shiny))

    useEffect(() => {
        pokemon.forEach(p => (
            // console.log(p.url)
            //   <div key={p.name}>{p.url}</div>
            axios.get(p.url)
                .then(res => setSprites([...sprites, res.data.sprites.front_shiny]))
                // .then(console.log(...sprites))
          ))
    }, [])


    //   console.log(...sprites)
    //   console.log(pics[0])
    return (
        <img src={sprites[0]} alt='pokepic'/>
        // <div>
        //     {pics.map(s => {
        //         <img src={s} alt='poke pic'/>
        //     })}
        // </div>
    )
}
