import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProfileData } from "../services/apiProfiles";
import styled from "styled-components";

const FullPageLoader = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { profile, isLoading } = useProfileData();

  useEffect(() => {
    if (!profile && !isLoading) {
      navigate("/login");
    }
  }, [profile, isLoading, navigate]);

  screen;
  if (isLoading)
    return <FullPageLoader>Syncing Nexus Identity...</FullPageLoader>;

  return profile ? children : null;
}

export default ProtectedRoute;
