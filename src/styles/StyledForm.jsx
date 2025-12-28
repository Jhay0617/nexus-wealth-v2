import styled from "styled-components";

export const FormContainer = styled.aside`
  background: ${(props) => props.theme.colors.glass};
  backdrop-filter: blur(16px);
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 24px;
  padding: 2rem;
  height: fit-content;
  position: sticky;
  top: 2rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const FormTitle = styled.h4`
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.text};
`;

export const Label = styled.label`
  font-family: "Nunito", sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.muted};
  text-transform: uppercase;
  margin-bottom: -0.8rem;
`;
