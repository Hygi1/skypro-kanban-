import styled from "styled-components";

export const MainWrapper = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  min-height: calc(100vh - 70px);
  padding-top: 25px;
  padding-bottom: 49px;

  body.dark-theme & {
    background-color: ${({ theme }) => theme.colors.darkBg};
  }
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const MainTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 18px;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const MainSidebar = styled.div`
  width: 200px;
  flex-shrink: 0;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const MainColumns = styled.div`
  flex: 1;
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 20px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const MainCalendar = styled.div`
  margin-bottom: 20px;
`;

export const CalendarText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 0.7px solid ${({ theme }) => theme.colors.borderGray};
  background: ${({ theme }) => theme.colors.cardBg};
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  line-height: 1;

  svg {
    flex-shrink: 0;
  }

  body.dark-theme & {
    background-color: ${({ theme }) => theme.colors.darkCardBg};
    border-color: ${({ theme }) => theme.colors.darkBorder};
  }
`;
