import React from 'react';
import './styles.css';

const InputSearch = ({ search, setSearch }) => {
    
  return (
    <div className='header'>
      <p className='search'>Encontre seu Pokémon favorito aqui:</p>
      <input
        className='input-search'
        type="search"
        placeholder='Ex: Charmander'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default InputSearch;
