import React from "react"
import Pokemon from '../components/pokemon'
import pokemonData from '../assets/pokedex.json'

const pokemonList = pokemonData

const ListPokemon = () => {

    return (
        <>
            <p style={{ fontSize: '32px' }}>
                Pokemon Lists
            </p>
            <div
                style={{
                    height: '100vh',
                    display: 'flex',
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexWrap: 'wrap',
                    gap: 5,
                    margin: "5px",

                }}
            >

                {pokemonList.map((row) => {
                    return (
                        <Pokemon
                            name={row?.name?.english}
                            image={row?.image?.hires}
                            species={row?.species}
                            type={row?.type}
                            id={row?.id}
                        />
                    )
                })}
            </div>
        </>
    )
}
export default ListPokemon
