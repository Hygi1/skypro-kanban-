import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const RegisterBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: 0.7px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const RegisterTitle = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h2 {
    font-size: ${({ theme }) => theme.fonts.sizes.large};
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const RegisterForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RegisterInput = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 0.7px solid ${({ theme }) => theme.colors.inputBorder};
  outline: none;
  padding: 10px 8px;
  margin-bottom: 7px;
  background-color: ${({ theme }) =>
    theme.colors.cardBg === "#20202C" ? "transparent" : "inherit"};
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fonts.sizes.regular};
    line-height: 21px;
    letter-spacing: -0.28px;
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

export const RegisterButton = styled.button`
  width: 100%;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fonts.sizes.regular};
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const RegisterLink = styled.div`
  text-align: center;

  p,
  a {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: ${({ theme }) => theme.fonts.sizes.regular};
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
  }

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
