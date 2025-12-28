import styled from "styled-components";

export const LoginWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.background};
  background: radial-gradient(circle at 50% 50%, #1e293b 0%, #020617 100%);
  padding: 1.5rem;
`;

export const LoginCard = styled.div`
  width: 100%;
  max-width: 400px;
  background: ${(props) => props.theme.colors.glass};
  backdrop-filter: blur(20px);
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 28px;
  padding: 3rem 2.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

export const AuthTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.5rem;
`;

export const AuthSubtitle = styled.p`
  font-family: "Nunito", sans-serif;
  color: ${(props) => props.theme.colors.muted};
  margin-bottom: 2.5rem;
  font-size: 0.95rem;
`;

export const NeonButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: ${(props) => props.theme.colors.emerald};
  color: ${(props) => props.theme.colors.background};
  border-radius: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(16, 185, 129, 0.3);

  &:hover {
    box-shadow: 0 0 25px rgba(16, 185, 129, 0.5);
    transform: translateY(-2px);
  }

  &:disabled {
    background: ${(props) => props.theme.colors.muted};
    cursor: not-allowed;
  }
`;
export const ToggleText = styled.p`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.muted};

  span {
    color: ${(props) => props.theme.colors.emerald};
    cursor: pointer;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
`;
