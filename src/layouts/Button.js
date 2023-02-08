import styled from "styled-components";

export default styled.button`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  text-transform: uppercase;
  font-weight: 600;
  font-family: "Lexend Deca", sans-serif;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  :active {
    transform: scale(1.05);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
  }
`;
