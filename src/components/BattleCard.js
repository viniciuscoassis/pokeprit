import styled from "styled-components";

export default function BattleCard({ value }) {
  return (
    <Wrapper>
      <div className="fighters">
        <img src={value.img1} />
        <div>X</div>
        <img src={value.img2} />
      </div>
      <div className="divider"> </div>
      <div className="info">
        <div className="date">Data: {value.data}</div>
        <div>Hora: {value.hora}</div>
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
      width: 80%;
      height: 80%;
      object-fit: cover;
    }
  }
  .divider {
    height: 100%;
    width: 2px;
    background-color: black;
    margin-right: 2rem;
  }
  @media (max-width: 600px) {
    height: 8rem;

    .fighters {
      width: 40vw;
      height: 100%;
      img {
        width: 40%;
        height: 40%;
      }
    }
    .info {
      max-width: 20vw;
      .date {
        margin-bottom: 1rem;
      }
    }
    .divider {
      height: 80%;
    }
  }
`;
