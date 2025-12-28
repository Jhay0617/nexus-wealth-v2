import styled from "styled-components";

export const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  overflow-x: hidden;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const Main = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  margin: 0;
  background: radial-gradient(
    circle at 50% -20%,
    rgba(16, 185, 129, 0.05) 0%,
    transparent 50%
  );

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 3rem 4rem;
    height: 100vh;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
