import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import ListPokemons from "../components/PokedexPage/ListPokemons"
import { SelectType } from "../components/PokedexPage/SelectType"
import HeaderPages from "../components/HeaderPages"
import './styles/PokedexPage.css'
import PaginationPokedex from "../components/PokedexPage/PaginationPokedex"

const PokedexPage = () => {

  const [pokeSearch, setPokeSearch] = useState('')

  const [typeSelected, setTypeSelected] = useState('allPokemons')

  const [currentPage, setCurrentPage] = useState(1)

  const inputSearch = useRef()

  const trainer = useSelector(states => states.trainer)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=1302&offset=0'

  const [pokemons, getPokemons, getPokeByType] = useFetch(url)

  const handleSubmit = e => {
    e.preventDefault()
    setCurrentPage(1)
    setPokeSearch(inputSearch.current.value.trim().toLowerCase())
  }

  const pokemonsFiltered = pokemons?.results.filter(poke => {
    return poke.name.includes(pokeSearch)
  })

  const totalPageExc = (pokemonsFiltered?.length ?? 0) / 20;
  const totalPage = Math.ceil(totalPageExc);


  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1)
    }
  };

  const handlePreviusPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  };

  const getDataPage = (sizePage = 20) => {
    if (pokemonsFiltered) {
      const end = currentPage * sizePage;
      const start = end - sizePage;
      return pokemonsFiltered.slice(start, end);
    }
    return []
  }

  const pokemonsCardsPaginated = getDataPage();

  useEffect(() => {
    if (typeSelected === 'allPokemons') {
      getPokemons()
    }
    else {
      getPokeByType(typeSelected)
    }
  }, [typeSelected])


  return (
    <>
      <div className="pokes_header">
        <HeaderPages />
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
            setTypeSelected={setTypeSelected} />
        </div>
      </div>
      <div>

        <ListPokemons
          pokemons={pokemonsCardsPaginated}
        />
        <PaginationPokedex
          totalPage={totalPage}
          currentPage={currentPage}
          onNextPage={handleNextPage}
          onPreviusPage={handlePreviusPage}
        />
      </div>
    </>
  )
}

export default PokedexPage