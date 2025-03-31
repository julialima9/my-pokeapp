const API_URL = 'https://pokeapi.co/api/v2/';

export const fetchPokemons = async (limit = 20) => {
    console.log('fetchPokemons');
  try {
    const response = await fetch(`${API_URL}pokemon?limit=${limit}`);
    console.log(response);
    if (!response.ok) {
      throw new Error('Erro ao buscar Pokémon');
    }
    const data = await response.json();
    
    // Para pegar detalhes como imagem, fazemos outra requisição
    const pokemonDetails = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const details = await res.json();
        return {
          id: details.id,
          name: details.name,
          image: details.sprites.front_default, // Imagem do Pokémon
        };
      })
    );

    return pokemonDetails;
  } catch (error) {
    console.error(error);
    return [];
  }
};
