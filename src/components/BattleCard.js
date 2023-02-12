import styled from "styled-components";

export default function BattleCard() {
  return (
    <Wrapper>
      <div className="fighters">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
        <div>X</div>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
      </div>
      <div className="divider"> </div>
      <div className="info">
        <div>Data: 12/02/2021</div>
        <div>Hora: 5 PM</div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 10rem;
  display: flex;
  margin-bottom: 1rem;
  .info {
    display: flex;
    flex-direction: column;

    justify-content: center;
  }
  .fighters {
    display: flex;
    width: 20vw;
    height: 100%;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .divider {
    height: 100%;
    width: 2px;
    background-color: black;
    margin-right: 2rem;
  }
`;
