import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import styled from "styled-components";
import useGetPokemonByUrl from "../../hooks/api/useGetPokemonByUrl";

export default function PokemonCard({
  value,
  set,
  data,
  pageOnBlock1,
  pageOnBlock2,
  type,
}) {
  const { getPokemonByUrl } = useGetPokemonByUrl();
  const [pokemonInfo, setPokemonInfo] = useState({});

  const fetchPokemonInfo = async () => {
    const response = await getPokemonByUrl(value.url);
    setPokemonInfo(response);
  };

  useEffect(() => {
    fetchPokemonInfo();
  }, [pageOnBlock1, pageOnBlock2, value]);

  return (
    <Wrapper
      onClick={() => set(pokemonInfo?.id)}
      data={data}
      isSelected={data === pokemonInfo?.id}
      id={pokemonInfo.id}
    >
      {pokemonInfo?.sprites ? (
        <div className="image">
          <img src={pokemonInfo?.sprites.front_default} alt="pokemonImg" />{" "}
        </div>
      ) : (
        <ThreeDots color="#b24dc6" />
      )}

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
