import React from 'react'
import PokeCard from './PokeCard'

const ListPokemons = ({ pokemons }) => {
    return (
        <div>
            {
                pokemons?.results.map(pokeInfo => (
                    <PokeCard
                        key={pokeInfo.url}
                        pokeInfo={pokeInfo}
                    />
                    
                ))
            }
        </div>
    )
}

export default ListPokemons