import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import useGetPokemonById from "../../hooks/api/useGetPokemonById";

export default function PokemonCard({ value, set, data }) {
  const { getPokemonById } = useGetPokemonById();
  const [pokemonInfo, setPokemonInfo] = useState({});

  const fetchPokemonInfo = async () => {
    const response = await getPokemonById(value.url);
    setPokemonInfo(response);
  };
  useEffect(() => {
    fetchPokemonInfo();
  }, []);

  return (
    <Wrapper
      onClick={() => set(pokemonInfo?.id)}
      data={data}
      isSelected={data === pokemonInfo?.id}
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
  background-color: ${(props) => (props.isSelected ? "lightgray" : "white")};
  position: relative;

  :hover {
    transform: scale(1.1);
    z-index: 10;
  }
  .image {
    width: 100%;

    img {
      width: 100%;
      object-fit: scale-down;
    }
  }
  .name {
    position: absolute;
    bottom: 0;
    left: 0;
    font-weight: 600;
    font-size: 10px;
    color: #3ca4b8;
    text-transform: uppercase;
  }

  @media (max-width: 600px) {
    & > :not(:last-child) {
    }
    .image {
      width: 70%;
      margin: 0 auto;
    }
  }
`;
