import styled from "styled-components";

export const CardPageContainer = styled.div`
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

export const CardPageBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
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

export const CardPageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;

  @media (max-width: 495px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const CardPageTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  flex: 1;
`;

export const CardTheme = styled.div`
  padding: 5px 14px;
  border-radius: 18px;
`;

export const StatusContainer = styled.div`
  margin-bottom: 11px;
`;

export const StatusTitle = styled.p`
  margin-bottom: 14px;
`;

export const StatusButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusButton = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

export const FormColumn = styled.div`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const DescriptionTextarea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: ${({ theme }) => theme.colors.darkGray};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  &:disabled {
    cursor: not-allowed;
  }

  body.dark-theme & {
    background: ${({ theme }) => theme.colors.darkBg};
  }
`;

export const CategoryContainer = styled.div`
  margin-bottom: 20px;
`;

export const CategoryTitle = styled.p`
  margin-bottom: 14px;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 20px;
`;

export const TopButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 495px) {
    flex-direction: column;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;

  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;

    &:not(:last-child) {
      margin-right: 8px;
    }
  }

  @media (max-width: 495px) {
    width: 100%;
    flex-direction: column;

    button {
      width: 100%;
      margin-right: 0 !important;
    }
  }
`;

export const BottomButton = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;

  @media (max-width: 495px) {
    width: 100%;
  }
`;
