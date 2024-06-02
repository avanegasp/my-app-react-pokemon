import React, {useState, useEffect} from "react";

const AllPokemon = () =>{
    const RandomId = Math.floor(Math.random() * 806 + 1)
    const [pokemonId, usePokemonId] = useState(RandomId)

    async function pokemonInfo (){
        try{
            const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            const data = await response.json()
            console.log(data)
            usePokemonId(data)
        }catch(e){
            console.error("error.....",e)
        }
    }

    useEffect(()=>{
        pokemonInfo()
    },[])

    return(
        <div>
            <h1>
                Estos son todos los pokemon!
            </h1>
        </div>
    )
}

export default AllPokemon;