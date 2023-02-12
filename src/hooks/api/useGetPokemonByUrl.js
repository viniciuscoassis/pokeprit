import useAsync from "../useAsync";

import * as pokemonApi from "../../services/pokemonApi";

export default function useGetPokemonByUrl() {
  const {
    loading: pokemonsByUrlLoading,
    error: pokemonsByUrlError,
    act: getPokemonByUrl,
  } = useAsync((data) => pokemonApi.getPokemonByUrl(data), false);

  return {
    pokemonsByUrlLoading,
    pokemonsByUrlError,
    getPokemonByUrl,
  };
}
