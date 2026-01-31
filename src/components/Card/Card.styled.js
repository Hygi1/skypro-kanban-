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
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }

  body.dark-theme & {
    background-color: ${({ theme }) => theme.colors.darkCardBg};
    border: 0.7px solid ${({ theme }) => theme.colors.darkBorder};
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
  padding: ${({ theme }) => `${theme.spacing.xs} 14px`};
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  background-color: ${({ $color, theme }) => {
    switch ($color) {
      case "orange":
        return theme.colors.orangeBg;
      case "green":
        return theme.colors.greenBg;
      case "purple":
        return theme.colors.purpleBg;
      default:
        return theme.colors.gray;
    }
  }};

  p {
    font-size: ${({ theme }) => theme.fonts.sizes.small};
    font-weight: 600;
    line-height: 10px;
    color: ${({ $color, theme }) => {
      switch ($color) {
        case "orange":
          return theme.colors.orange;
        case "green":
          return theme.colors.green;
        case "purple":
          return theme.colors.purple;
        default:
          return theme.colors.white;
      }
    }};
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
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.regular};
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 100%;

  body.dark-theme & {
    color: ${({ theme }) => theme.colors.white};
  }

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
  justify-content: flex-start;
  width: 100%;

  svg {
    width: 13px;
    height: 13px;
    flex-shrink: 0;

    path {
      stroke: ${({ theme }) => theme.colors.gray};
    }
  }

  p {
    margin-left: ${({ theme }) => theme.spacing.xs};
    font-size: ${({ theme }) => theme.fonts.sizes.small};
    line-height: 13px;
    color: ${({ theme }) => theme.colors.gray};
    letter-spacing: 0.2px;
  }
`;
