import styled from "styled-components";
import { interFont, primaryFont } from "../fonts";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  width: 362px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: end;
    gap: 1.4rem;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: end;
    gap: 1.8rem;
  }
`;

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const FiltersLine = styled.div`
  background-color: rgba(16, 24, 40, 0.1);
  width: 100%;
  height: 2px;
  margin: 1rem 0 1rem;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  position: relative;
`;

export const FormBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  border-radius: 1.4rem;
  padding: 1.4rem 4.4rem;
  background-color: ${(p) => p.theme.colors.accentColor};
  color: ${(p) => p.theme.colors.white};
  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    background-color: ${(p) => p.theme.colors.accentColorHover};
  }

  @media (min-width: 768px) {
    padding: 1.4rem 3.2rem;
  }

  @media (min-width: 840px) {
    padding: 1.4rem 4.4rem;
  }
`;

export const ResetBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  border-radius: 1.4rem;
  padding: 1.4rem 4.4rem;
  background-color: transparent;
  color: ${(p) => p.theme.colors.mainTextColor};
  transition: all var(--primary-transition);
  border-bottom: 1px solid transparent;
  border-top: 1px solid transparent;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.colors.accentColor};
    border-bottom: 1px solid ${(p) => p.theme.colors.accentColor};
    border-top: 1px solid ${(p) => p.theme.colors.accentColor};
    text-decoration: none;
  }

  @media (min-width: 768px) {
    padding: 1.4rem 3.2rem;
  }

  @media (min-width: 860px) {
    padding: 1.4rem 4.4rem;
  }
`;

export const SelectInput = styled.div`
  position: relative;
  border: none;
  outline: none;
  background: none;
  border-radius: 14px;
  background-color: ${(p) => p.theme.colors.inputBgColor};
  padding: 1.4rem 1.8rem;
  height: 4.8rem;
  width: 100%;
  width: 360px;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${(p) => p.theme.colors.black};
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.inputBgColorHover};
  }

  &:focus {
    outline: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  /* @media (min-width: 768px) {
    width: 14rem;
  }

  @media (min-width: 840px) {
    width: 16rem;
  }

  @media (min-width: 1000px) {
    width: 22.4rem;
  } */
`;

export const SelectedOption = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 27.2rem;
  position: absolute;
  top: 100%;
  left: 0;
  box-shadow: 0 4px 36px 0 rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 1.4rem;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar-thumb {
    background-color: ${(p) => p.theme.colors.mainTextColorVeryLowOp};
    border-radius: 8px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: transparent;
  }

  padding: 1.4rem 1.8rem;
  background-color: ${(p) => p.theme.colors.headerBgColor};

  z-index: 5;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const SelectedOptionText = styled.span`
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.mainTextColorVeryLowOp};
  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.colors.mainTextColor};
  }
`;

export const SelectedFilterEquipmentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.8rem;
  width: 362px;
`;

export const SelectedFilterEquipmentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const SelectedFilterEquipmentTitle = styled.h3`
  font-family: ${interFont};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const SelectedFilterEquipmentSubTitle = styled.span`
  font-family: ${interFont};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.secondaryTextColor};
`;

export const SelectedFilterEquipmentText = styled.span`
  font-family: ${interFont};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const SelectedFilterEquipmentIcon = styled.span`
  font-size: 3.2rem;
`;

export const SelectedFilterEquipment = styled.div`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 17px 18px;
  width: 114px;
  height: 95px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  transition: all var(--primary-transition);

  &:hover {
    border: 1px solid ${(p) => p.theme.colors.accentColor};
    cursor: pointer;
  }
`;

export const FormLabel = styled.label`
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${(p) => p.theme.colors.mainTextColorLowOp};
`;

export const FormInputMileageWrapper = styled.div`
  display: flex;
  max-width: 32rem;
`;

export const FormInputRight = styled.input`
  border: none;
  outline: none;
  background: none;
  width: 100%;
  height: 4.8rem;
  border-radius: 0 14px 14px 0;
  background-color: ${(p) => p.theme.colors.inputBgColor};
  padding: 1.4rem 2.4rem;

  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${(p) => p.theme.colors.black};

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.inputBgColorHover};
  }

  &::placeholder {
    font-family: ${primaryFont};
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.11111;
    color: ${(p) => p.theme.colors.black};
  }

  &:focus {
    outline: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  @media (min-width: 1440px) {
    width: 16rem;
  }
`;

export const FormInputLeft = styled.input`
  border: none;
  outline: none;
  background: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-radius: 14px 0 0 14px;
  width: 100%;
  height: 4.8rem;
  background-color: ${(p) => p.theme.colors.inputBgColor};
  padding: 1.4rem 2.4rem;

  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${(p) => p.theme.colors.black};

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.inputBgColorHover};
  }

  &::placeholder {
    font-family: ${primaryFont};
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.11111;
    color: ${(p) => p.theme.colors.black};
  }

  &:focus {
    outline: none;
    box-shadow: ${(p) => p.theme.colors.boxFocus} 0px 7px 29px 0px;
  }

  @media (min-width: 1440px) {
    width: 16rem;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1.6rem;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const LocationIcon = styled(IoLocationOutline)`
  font-size: 1.8rem;
  color: ${(p) => p.theme.colors.black};

  @media (min-width: 768px) {
    right: 0;
  }

  @media (min-width: 1440px) {
    right: 1.2rem;
  }
`;