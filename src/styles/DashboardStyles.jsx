import styled from "styled-components";
import { Link } from "react-router-dom";
export const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SummaryCard = styled.div`
  grid-column: 1 / -1;
  background: ${(props) => props.theme.colors.glass};
  backdrop-filter: blur(16px);
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 24px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(16, 185, 129, 0.05) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const NetWorthLabel = styled.span`
  font-family: "Nunito", sans-serif;
  color: ${(props) => props.theme.colors.muted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.8rem;
  font-weight: 700;
`;

export const NetWorthAmount = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: ${(props) => props.theme.colors.emerald};
  font-weight: 700;
  text-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
`;

export const AssetCard = styled(Link)`
  background: ${(props) => props.theme.colors.glass};
  backdrop-filter: blur(12px);
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 160px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-5px);
    border-color: ${(props) => props.theme.colors.emerald};
    box-shadow: 0 10px 30px -10px rgba(16, 185, 129, 0.2);
  }
`;

export const AssetType = styled.span`
  font-family: "Nunito", sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.muted};
  letter-spacing: 0.05em;
  font-weight: 700;
  display: block;
  margin-bottom: 0.2rem;
`;

export const AssetName = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.text};
  font-weight: 600;
`;

export const AssetAmount = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  align-self: flex-end;
  margin-top: auto;
`;
export const AddAssetBtn = styled.button`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;

  background: rgba(16, 185, 129, 0.1);
  color: ${(props) => props.theme.colors.emerald};
  border: 1px solid ${(props) => props.theme.colors.emerald};

  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.1);

  &:hover {
    background: ${(props) => props.theme.colors.emerald};
    color: ${(props) => props.theme.colors.background};
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  width: 100%;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: auto;
  }
`;

export const DashboardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
  grid-column: 1 / -1;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
