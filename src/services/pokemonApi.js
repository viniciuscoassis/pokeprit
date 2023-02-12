import api from "./externalApi";

export async function getPokemons(offset) {
  const response = await api.get(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`
  );
  return response.data;
}

export async function getPokemonByUrl(url) {
  const response = await api.get(url);

  return response.data;
}

export async function getPokemonById(id) {
  const response = await api.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return response.data;
}
