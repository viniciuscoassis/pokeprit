import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../layouts/Button";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="top">Agende já sua batalha pokemon!</div>
      <div className="middle">
        "Pegue-os todos e lute agora! Agende sua batalha Pokémon hoje!"
      </div>
      <div className="bottom">
        <But
          color="#b24dc6"
          variant="filled"
          onClick={() => {
            navigate("/fighters");
          }}
        >
          agendar
        </But>
      </div>
    </Wrapper>
  );
}

const But = styled(Button)`
  width: 10vw;
  background-color: #b24dc6;
  color: white;
  border-radius: 20px;
  @media (max-width: 600px) {
    margin: 0 auto;
    width: 40vw;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-around;
  .top {
    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    font-family: "Press Start 2P", cursive;
  }
  .bottom {
    div {
      display: flex;
      background-color: #b24dc6;
      width: 15vw;
      height: 5vh;
    }
  }
  @media (max-width: 600px) {
    padding: 1rem;
    align-items: initial;
    .top {
      width: 90vw;
      font-size: 2rem;
      text-align: initial;
    }
  }
`;
