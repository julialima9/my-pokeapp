import React, { useEffect, useState } from 'react';
import { fetchPokemons } from '../../services/api';
import './styles.css';

const CardPokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const data = await fetchPokemons();
      console.log('Dados da API:', data); // Ver dados no console do navegador
      setPokemons(data);
    };

    getPokemons();
  }, []);

  return (
    <div className='list-pokemon'>
        <p>Caso queira pesquisar seus Pokémons, ultilize o filtro ao lado:</p>
      {pokemons.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        pokemons.map((pokemon) => (
          <div className='card-pokemon' key={pokemon.id}>
            <img className='img-pokemon' src={pokemon.image} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CardPokemon;
