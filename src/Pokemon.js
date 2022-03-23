import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Pokemon({ pokemon, setPokemon }) {
    const [sprites, setSprites] = useState([])
    let pokeJSX
    // console.log(pokemon)
    
    // axios.get(pokemon[0].url)
    //     .then(res => setSprites(res.data.sprites.front_shiny))

    // useEffect(() => {
    //     pokemon.forEach(p => (
    //         // console.log(p.url)
    //         //   <div key={p.name}>{p.url}</div>
    //         axios.get(p.url)
    //             .then(res => setSprites(prevSprites => [...prevSprites, res.data.sprites.front_shiny]))
    //             // .then(console.log(...sprites))
    //       ))
    // }, [pokemon])

    useEffect(() => {
        setPokemon(0)
    }, [pokemon])

    // useEffect(() => {
    //     pokeJSX = pokemon.map((p,i) => {
    //         let newArr = [...pokemon]
    //         axios.get(p.url)
    //             .then(res => newArr[i] = {name: p.name, data: res.data})
    //             .then(setPokemon(newArr))
    //             .then(console.log(pokemon))
    //         return (
    //             <>
    //                 <p key={p.name}>{p.name}</p>
    //             </>
    //         )
    //     })
    // }, [])

    console.log(pokeJSX)
    pokeJSX = pokemon.map((p,i) => {
        let newArr = [...pokemon]
        axios.get(p.url)
            // .then(res => newArr[i] = {name: p.name, data: res.data})
            .then(setPokemon(newArr))
            // .then(console.log(pokemon))
        return (
            <>
                <p key={p.name}>{p.name}</p>
            </>
        )
    })
    return (
        <div>
            {pokeJSX}
        </div>
    )
}
