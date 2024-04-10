import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import ListPokemons from "../components/PokedexPage/ListPokemons"
import { SelectType } from "../components/PokedexPage/SelectType"
import HeaderPages from "../components/HeaderPages"
import './styles/PokedexPage.css'

const PokedexPage = () => {

  const [pokeSearch, setPokeSearch] = useState('')

  const [typeSelected,setTypeSelected] = useState('allPokemons')

  const inputSearch = useRef()

  const trainer =  useSelector(states => states.trainer)

  const  url = 'https://pokeapi.co/api/v2/pokemon?limit=1302&offset=0'
  
  const [pokemons, getPokemons, getPokeByType]=useFetch(url)

  const handleSubmit = e => {
      e.preventDefault()
      setPokeSearch(inputSearch.current.value.trim().toLowerCase())
  }

  const pokemonsFiltered = pokemons?.results.filter(poke => {
      return poke.name.includes(pokeSearch)
  })

  useEffect(() => {
    if(typeSelected ==='allPokemons'){
    getPokemons() 
    }
    else {
      getPokeByType(typeSelected)
    }
  },[typeSelected])


  return (
  <>
  <div className="pokes_header">
    <HeaderPages/>
  </div>
    <p className="pokes_container_welcome"> <span className="pokes_welcome">Welcome {trainer},</span> <span> here you can find favorite pokemon</span></p>
        <div className="container_search">
          <div>
            <form onSubmit={handleSubmit}>
                <input className="pokes_input" ref={inputSearch} type="text" />
                <button className="pokes_button">Search</button>
            </form>
          </div>
          <div>
  <SelectType
              setTypeSelected={setTypeSelected}/>
          </div>
        </div>  
        <div>
              <ListPokemons
                pokemons={pokemonsFiltered}
              />
        </div>
    </>
  )
}

export default PokedexPage