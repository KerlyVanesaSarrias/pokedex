import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import ListPokemons from "../components/PokedexPage/ListPokemons"

const PokedexPage = () => {


  // const [pokeSearch, setPokeSearch] = useState('')


  // const inputSearch = useRef()

  const trainer =  useSelector(states => states.trainer)

  const  url = 'https://pokeapi.co/api/v2/pokemon?limit=1302&offset=0'
  const [pokemons, getPokemons]=useFetch(url)

console.log(pokemons)

  // const handleSubmit = e => {
  //     e.preventDefault()
  //     setPokeSearch(inputSearch.current.value.trim().toLowerCase())
  // }
  // const pokemonsFiltered = pokemons?.results.filter(poke => {
  //     return poke.name.includes(pokeSearch)
  // })

  useEffect(() => {
    getPokemons() 
  },[])


  return (
    <div>
      <p>Welcome <span>{trainer}, here you can find favorite pokemon</span></p>
        {/* <form onSubmit={handleSubmit}>
            <input ref={inputSearch} type="text" />
            <button>Search</button>
        </form> */}
            <ListPokemons
                pokemons = {pokemons}/>
          
        
      
    </div>
  )
}

export default PokedexPage