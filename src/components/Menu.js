import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import styled from "styled-components";
import useLocalStorage from "../hooks/useLocalStorage";
import BattleCard from "./BattleCard";

export default function Menu() {
  const [isActivated, setIsActivated] = useState(true);
  const [storedValue, setValue] = useLocalStorage("battles", []);

  useEffect(() => {
    console.log(storedValue);
  }, []);

  return (
    <Wrapper isActivated={isActivated}>
      <AiOutlineMenu onClick={() => setIsActivated(!isActivated)} />
      <div className="menu">
        <div className="X" onClick={() => setIsActivated(!isActivated)}>
          X
        </div>
        <div className="battlesMenu">
          <h1>Batalhas agendadas:</h1>
          <div className="battleContainer">
            {storedValue
              ? storedValue.map((value, index) => (
                  <BattleCard key={index} value={value} />
                ))
              : ""}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  .battlesMenu {
    .battleContainer {
      margin-top: 2rem;
      padding-top: 2rem;
      border: 1px solid black;
      border-radius: 10px;
      height: 50vh;
      overflow-x: hidden;
      overflow-y: scroll;
    }
  }
  .X {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .menu {
    padding: 2rem;
    font-family: "Press Start 2P", cursive;
    z-index: 999;
    transition: all 1s ease-out;
    position: absolute;
    background-color: white;
    min-width: 50vw;
    min-height: 100vh;
    top: -10px;
    left: ${(props) => (props.isActivated ? "-10px" : "-1000px")};
  }
  @media (max-width: 600px) {
    .menu {
      font-size: 10px;
      min-width: 100vw;
    }
  }
`;
