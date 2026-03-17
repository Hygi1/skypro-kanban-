import styled from "styled-components";

export const CalendarWrapper = styled.div`
  width: 100%;
  max-width: 182px;
  margin-bottom: 20px;
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const CalendarMonth = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  font-weight: 600;
  line-height: 25px;
`;

export const CalendarNav = styled.div`
  display: flex;
  gap: 10px;
`;

export const NavAction = styled.button`
  width: 18px;
  height: 25px;
  background: none;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${({ theme }) => theme.colors.gray};
  }

  &:hover:not(:disabled) {
    svg {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const CalendarDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  margin-bottom: 4px;
`;

export const CalendarCell = styled.div`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 10px;
  line-height: 1;
  cursor: ${({ $isClickable }) => ($isClickable ? "pointer" : "default")};

  /* Header cells */
  ${({ $isHeader, $isWeekend, theme }) =>
    $isHeader &&
    `
    color: ${theme.colors.gray};
    font-weight: 500;
    text-transform: lowercase;
    ${$isWeekend && `color: ${theme.colors.textLight};`}
  `}

  /* Other month cells */
  ${({ $otherMonth, theme }) =>
    $otherMonth &&
    `
    color: ${theme.colors.textLight};
    opacity: 0.5;
  `}
  
  /* Current day */
  ${({ $isCurrent, theme }) =>
    $isCurrent &&
    `
    font-weight: 700;
    color: ${theme.colors.primary};
  `}
  
  /* Weekend */
  ${({ $isWeekend, $isHeader, theme }) =>
    $isWeekend &&
    !$isHeader &&
    `
    color: ${theme.colors.textLight};
  `}
  
  /* Selected day */
  ${({ $isSelected, theme }) =>
    $isSelected &&
    `
    background-color: ${theme.colors.gray};
    color: ${theme.colors.white};
  `}
  
  /* Hover effect for clickable cells */
  &:hover {
    ${({ $isClickable, $isSelected, theme }) =>
      $isClickable &&
      !$isSelected &&
      `
      background-color: ${theme.colors.darkGray};
      color: ${theme.colors.text};
    `}
  }
`;

export const CalendarPeriod = styled.div`
  margin-top: 10px;

  p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 10px;
    line-height: 1;

    span {
      color: ${({ theme }) => theme.colors.text};
      font-weight: 600;
    }
  }
`;
