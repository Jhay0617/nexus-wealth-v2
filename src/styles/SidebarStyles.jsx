import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledSidebar = styled.aside`
  background-color: ${(props) => props.theme.colors.surface};
  background: ${(props) => props.theme.colors.glass};
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  padding: 1rem;

  display: flex;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 260px;
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    padding: 2.5rem 1.5rem;
    border-bottom: none;
    border-right: 1px solid ${(props) => props.theme.colors.border};
    position: sticky;
    top: 0;
  }
`;

export const NavList = styled.nav`
  display: flex;
  gap: 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    width: 100%;
    margin-top: 2rem;
  }
`;

export const StyledLink = styled(NavLink)`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.muted};
  text-decoration: none;
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.text};
    background: rgba(255, 255, 255, 0.05);
  }

  &.active {
    color: ${(props) => props.theme.colors.emerald};
    background: rgba(16, 185, 129, 0.1);
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.05);

    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      border-right: 3px solid ${(props) => props.theme.colors.emerald};
      border-radius: 12px 0 0 12px;
    }
  }
`;
