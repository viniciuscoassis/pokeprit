import useAsync from "../useAsync";

import * as pokemonApi from "../../services/pokemonApi";

export default function useGetPokemonByUrl() {
  const {
    loading: pokemonsByIdLoading,
    error: pokemonsByIdError,
    act: getPokemonByUrl,
  } = useAsync((data) => pokemonApi.getPokemonById(data), false);

  return {
    pokemonsByIdLoading,
    pokemonsByIdError,
    getPokemonByUrl,
  };
}
