import { useState } from "react";
import styled from "styled-components";
import vs from "../../../assets/images/vs.png";
import Button from "../../../layouts/Button";

export default function PokemonSelectionPage() {
  const [selected1, setSelected1] = useState(false);
  return (
    <Wrapper>
      <div className="top">escolha seus lutadores</div>
      <div className="middle">
        <FighterContainer className="left">
          <Box>ola</Box>
          <Box>ola</Box>
          <Box>ola</Box>
        </FighterContainer>
        <div className="center">
          <img src={vs} />
        </div>
        <FighterContainer className="right">segundo</FighterContainer>
      </div>
      <div className="bottom">
        <But>selecionar data</But>
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

const FighterContainer = styled.div`
  border: 2px solid #d3d3d3;
  border-radius: 20px;
  padding: 1rem;
  width: 23vw;
  height: 40vh;
  display: flex;
  flex-wrap: wrap;
`;

const Box = styled.div`
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  width: 9.1rem;
  height: 8rem; ;
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
    border: 2px solid black;
    width: 23vw;
    height: 40vh;
  }
  .right {
    border: 2px solid black;
    width: 23vw;
  }
  .middle {
    display: flex;
    .center {
      margin-top: 60px;
      width: 200px;
      height: 200px;
      display: flex;
      justify-content: center;

      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;
