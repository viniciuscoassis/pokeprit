import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "../../layouts/Container";
import Logo from "../../assets/images/logo.png";
import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function DashBoard() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, []);
  return (
    <DashboardLayout>
      <img src={Logo} alt="logo" />
      <Menu>
        <AiOutlineMenu />
      </Menu>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </DashboardLayout>
  );
}

const Menu = styled.div`
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
`;
const Wrapper = styled(Container)``;

const DashboardLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: rgb(60, 164, 184);
  background: linear-gradient(
    90deg,
    rgba(60, 164, 184, 1) 0%,
    rgba(178, 77, 198, 1) 100%
  );
  min-height: 100vh;
  img {
    width: 10%;
  }
  @media (max-width: 600px) {
    img {
      width: 50%;
    }
  }
`;
