import styled from "styled-components";

export const ColumnWrapper = styled.div`
  min-width: 220px;
  width: 100%;

  @media (max-width: 1200px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;
  cursor: pointer;
  display: flex;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;

export const ColumnCount = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-left: 6px;
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: block;

  @media (max-width: 1200px) {
    display: flex;
    overflow-x: auto;
    padding: 5px;
    gap: 10px;

    &::-webkit-scrollbar {
      height: 6px;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.darkGray};
      border-radius: ${({ theme }) => theme.borderRadius.small};
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.gray};
      border-radius: ${({ theme }) => theme.borderRadius.small};
    }
  }
`;
