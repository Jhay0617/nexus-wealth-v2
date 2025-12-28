import styled from "styled-components";

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const HeaderSection = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const TransactionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const HistoryTable = styled.div`
  background: ${(props) => props.theme.colors.glass};
  backdrop-filter: blur(12px);
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 24px;
  padding: 1.5rem;
  overflow-x: auto;
`;

export const TransactionRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-family: "Nunito", sans-serif;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }

  .category {
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.emerald};
    text-transform: uppercase;
    font-weight: 700;
  }

  .amount {
    text-align: right;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }
`;
