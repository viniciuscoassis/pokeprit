import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Container from "../../assets/layouts/Container";
import { Navigate } from "react-router-dom";

export default function DashBoard() {
  return (
    <DashboardLayout>
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
`;
