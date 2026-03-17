import styled from "styled-components";

export const UserPopup = styled.div`
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: 0.7px solid ${({ theme }) => theme.colors.borderGray};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.popup};
  padding: 34px;
  text-align: center;
  z-index: 10;
  animation: fadeIn 0.2s ease-out;

  body.dark-theme & {
    background: ${({ theme }) => theme.colors.darkBg};
    border-color: ${({ theme }) => theme.colors.darkBorder};
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const UserName = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;

  body.dark-theme & {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const UserEmail = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const ThemeToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    color: ${({ theme }) => theme.colors.black};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;

    body.dark-theme & {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const ThemeCheckbox = styled.input`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: ${({ theme }) => theme.colors.darkGray};
  outline: none;
  appearance: none;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gray};
    transition: 0.3s;
  }

  &:checked::before {
    left: 12px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const LogoutButton = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  body.dark-theme & {
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.white};

    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.darkBg};
      border-color: ${({ theme }) => theme.colors.white};
    }
  }
`;
