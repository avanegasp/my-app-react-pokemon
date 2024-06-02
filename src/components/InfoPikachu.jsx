import React, { useEffect, useState } from "react";

const InfoPikachu = () =>{

    const [pokemons, setPokemon] = useState(null)
    
    async function getInfoPokemon(){
        try{
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
            const data = await response.json()
            console.log(data.name)
            console.log(data)
            setPokemon(data)
        }catch(e){
            console.error(e)
        }
    }
    useEffect(()=>{
        getInfoPokemon()
    },[])

    if(pokemons === null){
        return <p>Loading...</p>
    }

    return(
        <div className="card">
        <img src={pokemons.sprites.other.home.front_default} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Nombre: {pokemons.name}</h5>
            <p className="card-text">Defensa: {pokemons.stats[2].base_stat}</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Ataque: {pokemons.order}</li>
            <li className="list-group-item">Ataque Especial: {pokemons.stats[3].base_stat} </li>
            <li className="list-group-item">Defensa Especial: {pokemons.stats[4].base_stat} </li>
        </ul>
    </div>
    )
}

export default InfoPikachu