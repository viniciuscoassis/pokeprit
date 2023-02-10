import { useEffect, useState } from "react";
import styled from "styled-components";
import vs from "../../../assets/images/vs.png";
import PokemonCard from "../../../components/PokemonSelection/PokemonCard";
import Button from "../../../layouts/Button";
import { Pagination } from "@mui/material";
import useGetPokemons from "../../../hooks/api/useGetPokemons";
import { MagnifyingGlass } from "react-loader-spinner";

export default function PokemonSelectionPage() {
  const [selected1, setSelected1] = useState(0);
  const [selected2, setSelected2] = useState(0);

  const { getPokemons } = useGetPokemons();

  const [pokemons, setPokemons] = useState([]);
  const [pokemons2, setPokemons2] = useState([]);

  const [refresh, setRefresh] = useState(false);

  const [pageOnBlock1, setPageOnBlock1] = useState(1);
  const [pageOnBlock2, setPageOnBlock2] = useState(1);

  const [count, setCount] = useState(0);

  const fetchPokemons = async () => {
    const response = await getPokemons(9 * pageOnBlock1);
    console.log(response.results);
    setPokemons(response.results);
    setCount(response.count);
  };

  const fetchPokemons2 = async () => {
    const response = await getPokemons(
      pageOnBlock2 === 0 ? "0" : 9 * (pageOnBlock2 - 1)
    );
    setPokemons2(response.results);
    setCount(response.count);
  };

  useEffect(() => {
    fetchPokemons();
    console.log(pokemons);
  }, []);
  useEffect(() => {
    fetchPokemons2();
  }, []);

  const hadlePageSelect = (e, value) => {
    setPageOnBlock1(value);
  };
  const hadlePage2Select = (e, value) => {
    setPageOnBlock2(value);
  };

  return (
    <Wrapper>
      <div className="top">escolha seus lutadores</div>
      <div className="middle">
        <div className="left ">
          <PokemonContainer>
            {pokemons ? (
              pokemons.map((value, index) => (
                <PokemonCard
                  refresh={refresh}
                  value={value}
                  key={index}
                  set={setSelected1}
                  data={selected1}
                  selected1={selected1}
                  selected2={selected2}
                  type="first"
                />
              ))
            ) : (
              <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="MagnifyingGlass-loading"
                wrapperStyle={{}}
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor="#c0efff"
                color="#e15b64"
              />
            )}
          </PokemonContainer>

          <Pagination
            size={"small"}
            count={Math.floor(count / 9)}
            page={pageOnBlock1}
            onChange={hadlePageSelect}
            showLastButton
            showFirstButton
          />
        </div>

        <div className="center">
          <img src={vs} alt="vs symbol" />
        </div>
        <div className="right ">
          <PokemonContainer>
            {pokemons2 ? (
              pokemons2.map((value, index) => (
                <PokemonCard
                  refresh={refresh}
                  value={value}
                  key={index}
                  set={setSelected2}
                  data={selected2}
                  selected1={selected1}
                  selected2={selected2}
                  type="second"
                />
              ))
            ) : (
              <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="MagnifyingGlass-loading"
                wrapperStyle={{}}
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor="#c0efff"
                color="#e15b64"
              />
            )}
          </PokemonContainer>

          <Pagination
            size={"small"}
            count={Math.floor(count / 9)}
            page={pageOnBlock2}
            onChange={hadlePage2Select}
            showLastButton
            showFirstButton
          />
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
  max-width: 24.5vw;
  min-height: 25rem;
  max-height: 25rem;
  padding-left: 1rem;
  margin-bottom: 1rem;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 600px) {
    overflow-x: hidden;
    display: flex;
    width: 80vw;
    padding-left: 0.5rem;
  }
`;

const Wrapper = styled.div`
  height: 100%;

  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .top {
    font-family: "Press Start 2P", cursive;
    text-transform: uppercase;
  }

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
  @media (max-width: 600px) {
    overflow: scroll;
    .middle {
      flex-direction: column;
    }
  }
`;
