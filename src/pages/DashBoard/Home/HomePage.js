import Container from "../../../assets/layouts/Container";
import styled from "styled-components";
import Logo from "../../../assets/images/logo.png";

export default function HomePage() {
  return (
    <Wrapper>
      <div className="top">
        {" "}
        <img src={Logo} alt="logo" />
      </div>
      <div className="middle">a</div>
      <div className="bottom">b</div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 2rem;
  .top {
    display: flex;
    justify-content: center;
    width: 10vw;
    img {
      width: 100%;
    }
  }
`;
