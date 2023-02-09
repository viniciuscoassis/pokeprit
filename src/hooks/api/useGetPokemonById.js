import useAsync from "../useAsync";

import * as pokemonApi from "../../services/pokemonApi";

export default function useGetPokemonById() {
  const {
    loading: pokemonsByIdLoading,
    error: pokemonsByIdError,
    act: getPokemonById,
  } = useAsync((data) => pokemonApi.getPokemonById(data), false);

  return {
    pokemonsByIdLoading,
    pokemonsByIdError,
    getPokemonById,
  };
}
