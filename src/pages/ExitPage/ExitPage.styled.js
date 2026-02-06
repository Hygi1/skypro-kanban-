import styled from "styled-components";

export const ExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const ExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.cardBg};
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  body.dark-theme & {
    background-color: ${({ theme }) => theme.colors.darkCardBg};
    border-color: ${({ theme }) => theme.colors.darkBorder};
  }

  @media (max-width: 375px) {
    padding: 50px 20px;
  }
`;

export const ExitTitle = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ExitForm = styled.form`
  width: 100%;
`;

export const ExitButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 375px) {
    flex-direction: column;
    gap: 10px;
  }
`;
