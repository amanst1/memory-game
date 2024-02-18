/* eslint-disable react/prop-types */
import '../App.css'
import { useEffect, useState } from "react"

export default function ImageComponent({id, url, onClick}) {
    const [pokemon, setPokemon] = useState({})
    

    useEffect(()=>{
       fetch(url)
        .then(response => response.json())
        .then(json => setPokemon(json))
    }, [url])

    return (
        <div className='images' onClick={() => onClick(id)}>
            
            <h2>{ pokemon?.name?.toUpperCase() }</h2>
            
            <img src={ pokemon?.sprites?.front_default } alt="pokemon image" />
        
        </div>
    )
}