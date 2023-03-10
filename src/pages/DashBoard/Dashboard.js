import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "../../layouts/Container";
import Logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Menu from "../../components/Menu";

export default function DashBoard() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, []);
  return (
    <DashboardLayout>
      <img src={Logo} alt="logo" />
      <Menu />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </DashboardLayout>
  );
}

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
