import React, { useEffect, useState } from 'react';
import './styles.css';
import { fetchPokemons } from '../../services/api';
import InputSearch from '../input-search';

const CardPokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const data = await fetchPokemons();
      setPokemons(data);
      setFilteredPokemons(data);
    };

    getPokemons();
  }, []);

  useEffect(() => {
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().startsWith(search.toLowerCase()) 
    );
    setFilteredPokemons(filtered);
  }, [search, pokemons]); 

  return (
    <div className='container'>
      <InputSearch search={search} setSearch={setSearch} />
      <div className='list-pokemon'>
        {filteredPokemons.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          filteredPokemons.map((pokemon) => (
            <div className='card-pokemon' key={pokemon.id} title={pokemon.name}>
              <div className='img-pokemon'>
                <img className='img' src={pokemon.image} alt={pokemon.name} />
              </div>
              <div className='infos-pokemon'>
                <p className='id-pokemon'>N°{pokemon.id}</p>
                <p className='name-pokemon'>{pokemon.name}</p>
                <p className='type-pokemon'>{pokemon.types.join(' | ')}</p>

              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CardPokemon;
