import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Container, Main, StyledAppLayout } from "../styles/ApplayoutStyles";

function Applayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default Applayout;
