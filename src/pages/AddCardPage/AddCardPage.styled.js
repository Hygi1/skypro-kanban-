import styled from "styled-components";
import { Link } from "react-router-dom";

export const AddCardContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  padding: 40px 0;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;

  body.dark-theme & {
    background-color: ${({ theme }) => theme.colors.darkBg};
  }
`;

export const AddCardBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  position: relative;

  body.dark-theme & {
    background-color: ${({ theme }) => theme.colors.darkCardBg};
    border-color: ${({ theme }) => theme.colors.darkBorder};
  }

  @media (max-width: 660px) {
    border-radius: 0;
    padding: 20px 16px 32px;
  }
`;

export const AddCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const TitleText = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CloseButton = styled(Link)`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

export const FormColumn = styled.div`
  width: 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  margin-bottom: 14px;
`;

export const FormInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  resize: vertical;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const CategoriesTitle = styled.p`
  margin-bottom: 14px;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CategoryButtons = styled.div`
  display: flex;
  gap: 7px;
`;

export const CategoryButton = styled.button`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  border: none;
  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export const SubmitButton = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;
  cursor: pointer;
`;
