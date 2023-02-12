import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useGetPokemonById from "../../../hooks/api/useGetPokemonById";
import Button from "../../../layouts/Button";
import format from "date-fns/format";

export default function ReviewPage() {
  const { getPokemonById } = useGetPokemonById();
  const [pokemon1, setPokemon1] = useState({});
  const [pokemon2, setPokemon2] = useState({});

  const location = useLocation();
  const navigate = useNavigate();
  const ids = location.state.ids;

  const fetchPokemon1ById = async () => {
    const pokemonInfo = await getPokemonById(ids.id1);
    setPokemon1(pokemonInfo);
  };
  const fetchPokemon2ById = async () => {
    const pokemonInfo = await getPokemonById(ids.id2);
    setPokemon2(pokemonInfo);
  };

  useEffect(() => {
    fetchPokemon1ById();
    fetchPokemon2ById();
    console.log(location.state);
  }, []);

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
        <div className="left fighter">
          <img
            src={
              pokemon1?.sprites?.back_default
                ? pokemon1?.sprites?.back_default
                : pokemon1?.sprites?.front_default
            }
          />
        </div>
        <div className="x">X</div>
        <div className="right fighter">
          <img src={pokemon2?.sprites?.front_default} />
        </div>
      </div>
      <div className="bottom">
        <div>Data: {format(location.state.date, "dd/MM/yyyy")}</div>{" "}
        <div>Horário: {format(location.state.date, "p")}</div>{" "}
        <But onClick={() => navigate("/home")}>confirmar </But>
      </div>
    </Wrapper>
  );
}
const But = styled(Button)`
  width: 200px;
  height: 2rem;
  background-color: #3ca4b8;
  color: white;
  font-size: 10px;
  border-radius: 10px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .bottom {
    div {
      margin: 0 auto;
    }
  }
  .top {
    text-align: center;
    font-family: "Press Start 2P", cursive;
    font-size: 30px;
  }
  .middle {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 2rem;
    .fighter {
      height: 25rem;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
