import React, { useState, useEffect } from 'react';

function Pokemon({ avatar, name }) {
    return (
        <figure>
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    );
}

function UseEffectPeticion() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const getPokemons = async (url) => {
            try {
                const res = await fetch(url);
                const data = await res.json();

                const pokemonsData = await Promise.all(
                    data.results.map(async (poke) => {
                        const res = await fetch(poke.url);
                        const data = await res.json();

                        return {
                            id: data.id,
                            name: data.name,
                            avatar: data.sprites.front_default,
                        };
                    })
                );

                setPokemon(pokemonsData);
            } catch (error) {
                console.error(error);
            }
        };

        getPokemons("https://pokeapi.co/api/v2/pokemon/?limit=20");
    }, []);


    return (
        <>
            <h1>Peticiones Asíncronas con useEffect</h1>

            {pokemon.length === 0 ? (
                <h3>Cargando...</h3>
            ) : (
                pokemon.map((el) => (
                    <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
                ))
            )}
        </>
    );
}

export default UseEffectPeticion;
