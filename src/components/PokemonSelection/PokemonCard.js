import styled from "styled-components";

export default function PokemonCard({
  image,
  name,
  setSelected1,
  selected1,
  id,
}) {
  return (
    <Wrapper onClick={() => setSelected1(id)} selected1={selected1} id={id}>
      <div className="image">
        <img src={image} alt="pokemon" />
      </div>
      <div className="name"></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  width: 9.1rem;
  height: 8rem;
  background-color: ${(props) =>
    props.selected1 === props.id ? "lightgray" : "white"};

  :hover {
    transform: scale(1.1);
  }
  .image {
    width: 100%;

    img {
      width: 100%;
      object-fit: scale-down;
    }
  }
`;
