import styled from "styled-components";
import { primaryFont } from "../../components/fonts";

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
  align-items: start;
  padding: 6.4rem 2.4rem;

  @media (min-width: 920px) {
    flex-direction: row;
    gap: 3.2rem;
    /* padding: 10rem 6.4rem; */
  }
`;

export const CarsMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
`;

export const CarsMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  height: 100%;
  width: 100%;

  position: relative;

  /* @media (min-width: 520px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    justify-items: center;
    gap: 2.4rem;
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 5rem;
    column-gap: 2.4rem;
  } */
`;

export const NoMatchCar = styled.li`
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.mainTextColor};
`;
