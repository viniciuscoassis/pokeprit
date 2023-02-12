import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import useGetPokemonById from "../../../hooks/api/useGetPokemonByUrl";

export default function ReviewPage() {
  const { getPokemonById } = useGetPokemonById();
  const [pokemon1, setPokemon1] = useState({});
  const [pokemon2, setPokemon2] = useState({});

  const location = useLocation();
  const ids = location.state;

  const fetchPokemon1ById = async () => {
    const pokemonInfo = await getPokemonById(ids.id1);
    setPokemon1(pokemonInfo);
  };
  const fetchPokemon2ById = async () => {
    const pokemonInfo = await getPokemonById(ids.id2);
    setPokemon1(pokemonInfo);
  };

  useEffect(() => {
    fetchPokemon1ById();
    fetchPokemon2ById();
    console.log(ids);
  });

  return (
    <Wrapper>
      <div className="top">
        {" "}
        <h1>
          "A batalha está apenas começando, prepare-se para o desafio
          definitivo!"
        </h1>
      </div>
      <div className="middle">
        <div className="left-fighet">
          <img src={pokemon1?.sprites?.front_default} />
        </div>
        <div className="x"></div>
        <div className="right-fighet"></div>
      </div>
      <div className="bottom"></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .top {
    text-align: center;
    font-family: "Press Start 2P", cursive;
    font-size: 30px;
  }
`;
