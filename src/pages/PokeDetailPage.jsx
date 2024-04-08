import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import {useParams} from "react-router-dom"


const PokeDetailPage = () => {
  const {name} = useParams()
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`

  const [pokemon,getpokemon] = useFetch(url)

  useEffect(()=>{
    getpokemon()
  },[name])

  console.log(pokemon)

  return (
    <div>
      <header>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        <h2>{pokemon?.name}</h2>
      </header>
    </div>
  )
}

export default PokeDetailPage