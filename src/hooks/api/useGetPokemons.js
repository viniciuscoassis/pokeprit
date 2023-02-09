import useAsync from "../useAsync";

import * as pokemonApi from "../../services/pokemonApi";

export default function useGetPokemons() {
  const {
    loading: pokemonsLoading,
    error: pokemonsError,
    act: getPokemons,
  } = useAsync((data) => pokemonApi.getPokemons(data), false);

  return {
    pokemonsLoading,
    pokemonsError,
    getPokemons,
  };
}
