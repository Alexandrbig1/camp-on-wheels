import styled from "styled-components";
import heroImg from "@/assets/heroBg.jpg";
import { primaryFont } from "../../components/fonts";

export const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;

  padding: 2.4rem;

  @media (min-width: 920px) {
    padding: 5.4rem 9.6rem;
  }

  @media (min-width: 1020px) {
    padding: 9.6rem 12.8rem;
  }
`;

export const FavoritesMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  height: 100%;
  width: 100%;

  position: relative;
`;

export const FavoritesEmptyContainer = styled.div`
  min-height: calc(100vh - 6rem);
  height: 100%;
  margin: 0 auto;
`;

export const FavoritesEmptyWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 6rem);
  background: url(${heroImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  z-index: 1;
  padding: 1.2rem 0 1.2rem 1.2rem;
  overflow: hidden;

  display: flex;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5) 0);
    opacity: 0.7;
    z-index: -5;
  }

  @media (min-width: 375px) {
    padding: 1.2rem;
  }

  @media (min-width: 768px) {
    padding: 3.2rem;
    overflow: visible;
  }
`;

export const FavoritesEmptyTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  padding: 2.4rem;
  width: 60rem;
  background-color: ${(p) => p.theme.colors.heroBgLowOp};
  border-radius: 1.2rem;
  backdrop-filter: blur(5px);

  height: 100%;

  margin-top: 4.8rem;
`;

export const FavoritesEmptyTitle = styled.h2`
  color: ${(p) => p.theme.colors.lightWhiteColor};
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
`;

export const FavoritesEmptyText = styled.p`
  color: ${(p) => p.theme.colors.lightWhiteColor};
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
`;
