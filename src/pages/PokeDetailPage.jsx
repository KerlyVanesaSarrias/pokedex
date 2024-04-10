import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import { useParams } from "react-router-dom"
import HeaderPages from "../components/HeaderPages"


const PokeDetailPage = () => {
  const { name } = useParams()
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`

  const [pokemon, getpokemon] = useFetch(url)

  useEffect(() => {
    getpokemon()
  }, [name])

  console.log(pokemon)

  return (
    <>
      <HeaderPages />
      <div>
        <header>
          <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
          <div> #{pokemon?.id}</div>
          <h2>{pokemon?.name}</h2>
          <ul>
            <li><span> Weight</span><span>{pokemon?.weight} Kg</span> </li>
            <li><span>Height</span><span>{pokemon?.height}</span></li>
          </ul>
        </header>

        <div>
          <div>Type</div>
          <ul className='card_types'>
            {
              pokemon?.types.map(typeInfo => (
                <ul>
                  <li key={typeInfo.type.url}>{typeInfo.type.name}</li>
                </ul>
              ))
            }
          </ul>
        </div>
      </div>

      <section className=''>
        <ul className=''>
          {
            pokemon?.stats.map(statInfo => (
              <li className='' key={statInfo.stat.url}>
                <span className=''>{statInfo.stat.name}</span>
                <span >{statInfo.base_stat}</span>

              </li>
            ))
          }
        </ul>
      </section>

      

      <section>
        <ul>
          {
            pokemon?.moves.map(movesInfo => (
              <li key={movesInfo.move.url}>
                <span className=''>{movesInfo.move.name}</span>
              </li>
            ))
          }
        </ul>
      </section>
    </>
  )
}

export default PokeDetailPage