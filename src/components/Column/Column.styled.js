import styled from "styled-components";

export const ColumnWrapper = styled.div`
  width: 20%;
  margin: 0 5px;
  display: block;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 0 20px 0;
  }
`;

export const ColumnTitle = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => `${theme.spacing.md} 0`};

  p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.fonts.sizes.regular};
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: block;
  position: relative;

  @media screen and (max-width: 1200px) {
    display: flex;
    overflow-x: auto;
    padding: ${({ theme }) => theme.spacing.sm} 0;
    gap: ${({ theme }) => theme.spacing.sm};

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
