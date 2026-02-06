import styled from "styled-components";

export const NotFoundContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  background: ${({ theme }) => theme.colors.lightGray};

  body.dark-theme & {
    background: ${({ theme }) => theme.colors.darkBg};
  }
`;

export const NotFoundCode = styled.h1`
  font-size: 120px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 80px;
  }
`;

export const NotFoundText = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 20px;

  body.dark-theme & {
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const NotFoundDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 40px;
  max-width: 500px;
  line-height: 1.5;
`;

export const NotFoundButton = styled.button`
  width: 200px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
