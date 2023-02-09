import { useEffect, useState } from "react";
import styled from "styled-components";
import useGetPokemonById from "../../hooks/api/useGetPokemonById";

export default function PokemonCard({
  value,
  setSelected1,
  selected1,
  refresh,
}) {
  const { getPokemonById } = useGetPokemonById();
  const [pokemonInfo, setPokemonInfo] = useState({});

  const fetchPokemonInfo = async () => {
    const response = await getPokemonById(value.url);
    setPokemonInfo(response);
  };

  useEffect(() => {
    fetchPokemonInfo();
    console.log(pokemonInfo);
  }, [refresh]);

  return (
    <Wrapper
      onClick={() => setSelected1(pokemonInfo?.id)}
      selected1={selected1}
      id={pokemonInfo?.id}
    >
      <div className="image">
        <img src={pokemonInfo?.sprites?.front_default} alt="pokemonImg" />
      </div>
      <div className="name">{pokemonInfo?.name}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  width: 9.1rem;
  height: 8rem;
  background-color: ${(props) =>
    props.selected1 === props.id ? "lightgray" : "white"};

  :hover {
    transform: scale(1.1);
  }
  .image {
    width: 100%;

    img {
      width: 100%;
      object-fit: scale-down;
    }
  }
  .name {
    display: none;
  }
`;
