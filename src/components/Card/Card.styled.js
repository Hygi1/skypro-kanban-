import styled from "styled-components";

export const CardItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const CardWrapper = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  display: flex;
  flex-direction: column;
  padding: 15px 13px 19px;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderGray};
    box-shadow: ${({ theme }) => theme.shadows.card};
  }

  body.dark-theme & {
    background-color: ${({ theme }) => theme.colors.darkCardBg};
  }
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $color, theme }) =>
    $color === "orange"
      ? theme.colors.orangeBg
      : $color === "green"
      ? theme.colors.greenBg
      : $color === "purple"
      ? theme.colors.purpleBg
      : theme.colors.gray};

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    color: ${({ $color, theme }) =>
      $color === "orange"
        ? theme.colors.orange
        : $color === "green"
        ? theme.colors.green
        : $color === "purple"
        ? theme.colors.purple
        : theme.colors.white};
    text-transform: uppercase;
  }
`;

export const CardButton = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(148, 166, 190, 0.1);
  }

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    width: 13px;
    height: 13px;

    path {
      stroke: ${({ theme }) => theme.colors.gray};
    }
  }

  p {
    font-size: 10px;
    line-height: 13px;
    color: ${({ theme }) => theme.colors.gray};
    letter-spacing: 0.2px;
  }
`;
