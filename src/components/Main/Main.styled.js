import styled from "styled-components";

export const MainWrapper = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkGray};
  min-height: calc(100vh - 70px);

  body.dark-theme & {
    background-color: ${({ theme }) => theme.colors.darkBg};
  }
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  body.dark-theme & {
    background-color: ${({ theme }) => theme.colors.darkBg};
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 500;
`;
