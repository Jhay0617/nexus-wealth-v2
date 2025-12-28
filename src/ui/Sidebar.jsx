import { NavList, StyledLink, StyledSidebar } from "../styles/SidebarStyles";

function Sidebar() {
  return (
    <StyledSidebar>
      <NavList>
        <StyledLink to="/">Dashboard</StyledLink>
        <StyledLink to="/settings">Settings</StyledLink>
      </NavList>
    </StyledSidebar>
  );
}

export default Sidebar;
