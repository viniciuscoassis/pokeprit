import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import styled from "styled-components";

export default function Menu() {
  const [isActivated, setIsActivated] = useState(true);

  return (
    <Wrapper isActivated={isActivated}>
      <AiOutlineMenu onClick={() => setIsActivated(!isActivated)} />
      <div className="menu">
        <div className="X" onClick={() => setIsActivated(!isActivated)}>
          X
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
  transition: all 5s ease-in-out;
  .X {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .menu {
    position: absolute;
    background-color: white;
    min-width: 50vw;
    min-height: 100vh;
    top: -10px;
    left: ${(props) => (props.isActivated ? "-10px" : "-730px")};
  }
`;
