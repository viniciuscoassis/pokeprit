import api from "./externalApi";

export async function getPokemons(offset) {
  const response = await api.get(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`
  );
  return response.data;
}
