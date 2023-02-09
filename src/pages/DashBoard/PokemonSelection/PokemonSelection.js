import { useEffect, useState } from "react";
import styled from "styled-components";
import vs from "../../../assets/images/vs.png";
import PokemonCard from "../../../components/PokemonSelection/PokemonCard";
import Button from "../../../layouts/Button";
import { Pagination } from "@mui/material";
import useGetPokemons from "../../../hooks/api/useGetPokemons";

export default function PokemonSelectionPage() {
  const [selected1, setSelected1] = useState(false);
  const { getPokemons } = useGetPokemons();
  const [pokemons, setPokemons] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const fetchPokemons = async () => {
    const response = await getPokemons(0);
    setPokemons(response);
  };

  useEffect(() => {
    fetchPokemons();
  }, [refresh]);

  return (
    <Wrapper>
      <div className="top">escolha seus lutadores</div>
      <div className="middle">
        <div className="left ">
          <PokemonContainer>
            {pokemons ? console.log(pokemons) : console.log("nada")}
          </PokemonContainer>

          <Pagination count={10} />
        </div>

        <div className="center">
          <img src={vs} alt="vs symbol" />
        </div>
        <div className="right ">
          {" "}
          <Pagination count={10} />
        </div>
      </div>
      <div className="bottom">
        <But
          onClick={() => {
            setRefresh(!refresh);
          }}
        >
          selecionar data
        </But>
      </div>
    </Wrapper>
  );
}

const But = styled(Button)`
  width: 200px;
  background-color: #b24dc6;
  color: white;
  border-radius: 10px;
`;

const PokemonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 29vw;
  min-height: 25rem;
  max-height: 25rem;
  margin-bottom: 1rem;
`;

const Wrapper = styled.div`
  height: 100%;

  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .middle {
    display: flex;
    .center {
      margin-top: 120px;
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;

      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;
