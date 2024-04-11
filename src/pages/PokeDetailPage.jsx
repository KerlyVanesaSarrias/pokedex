import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import { useParams } from "react-router-dom"
import HeaderPages from "../components/HeaderPages"
import './styles/pokeDetailPage.css'
import ProgressBar from "../components/ProgressBar/ProgressBar"


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
      <div className="container">
        <div>
          <article className="detail_container">
            <header className={`detail_header bg-${pokemon?.types[0].type.name}`}>
              <img className='detail_img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            </header>
            <section className='card_principal'>
              <ul className="detail_id"> <li className="detail_value_id">#{pokemon?.id}</li> </ul>
              <h3 className={`detail_name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
              <ul className="detail_wh">
                <li className="detail_weight"><span className="wh_title"> Weight</span><span className="wh_value">{pokemon?.weight} Kg</span> </li>
                <li className="detail_height"><span className="wh_title" >Height</span><span className="wh_value">{pokemon?.height}</span></li>
              </ul>
              <div className="detail_t_a">
                <ul className='detail_types'>
                  <li className='t_a_title'>Type</li>
                  <li className='type_value' >
                    {
                      pokemon?.types.map(typeInfo => (
                        <div className="type_item" key={typeInfo.type.url}><p>{typeInfo.type.name}</p></div>
                      ))
                    }
                  </li>
                </ul>
                <ul className='detail_abilities'>
                  <li className='t_a_title'>Abilities</li>
                  <li className='detail_value'>
                    {
                      pokemon?.abilities.map(abilitiesInfo => (
                        <li className='ability_value' key={abilitiesInfo.ability.url}>{abilitiesInfo.ability.name}</li>
                      ))
                    }
                  </li>
                </ul>
              </div>
            </section>
            <hr className='detail_hr' />
            <section className='detail_stats'>
              <ul className='detail_list'>
                {
                  pokemon?.stats.map(statInfo => (
                    <ProgressBar
                      key={statInfo.stat.url}
                      label={statInfo.stat.name}
                      value={statInfo.base_stat}
                    />
                  ))
                }
              </ul>
            </section>
          </article>
        </div>
        <div className="details_moves">
              <ul className="">
                <li className="moves_container_title"><span className="moves_title">Moves</span></li>
                <li className="content_moves">
                  {
                    pokemon?.moves.map(movesInfo => (
                      <li key={movesInfo.move.url}>
                        <span className='moves_name'>{movesInfo.move.name}</span>
                      </li>
                    ))
                  }
                </li>
              </ul>
        </div>
      </div>

    </>
  )
}

export default PokeDetailPage