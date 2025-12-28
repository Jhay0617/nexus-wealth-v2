import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background: rgba(2, 6, 23, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    align-items: center;
  }
`;

export const ModalContent = styled.div`
  background: ${(props) => props.theme.colors.surface};
  background: ${(props) => props.theme.colors.glass};
  border: 1px solid ${(props) => props.theme.colors.border};
  width: 90%;
  max-width: 420px;
  margin: auto;
  padding: 2rem;
  border-radius: 24px 24px 0 0;
  animation: ${fadeIn} 0.3s ease-out;
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.4);
  overflow-x: hidden;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 90%;
    max-width: 480px;
    border-radius: 24px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  h2 {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.colors.emerald};
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-family: "Nunito", sans-serif;
    font-size: 0.85rem;
    color: ${(props) => props.theme.colors.muted};
    font-weight: 600;
  }
`;

export const DragHandle = styled.div`
  width: 40px;
  height: 4px;
  background: ${(props) => props.theme.colors.border};
  border-radius: 2px;
  margin: 0 auto 1.5rem auto;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const StyledSelect = styled.select`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 12px;
  padding: 0.8rem 1rem;
  color: white;
  font-family: "Nunito", sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.emerald};
    background-color: rgba(15, 23, 42, 0.9);
    box-shadow: 0 0 15px rgba(16, 185, 129, 0.1);
  }

  option {
    background-color: #0f172a;
    color: white;
    padding: 10px;
  }
`;

export const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 12px;
  padding: 0.8rem 1rem;
  color: white;
  font-family: "Nunito", sans-serif;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.emerald};
    background: rgba(255, 255, 255, 0.07);
    box-shadow: 0 0 15px rgba(16, 185, 129, 0.1);
  }
`;
