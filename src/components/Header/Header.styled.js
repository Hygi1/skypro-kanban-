import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};

  body.dark-theme & {
    background-color: ${({ theme }) => theme.colors.darkCardBg};
  }
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const HeaderLogo = styled.div`
  display: ${({ $show }) => ($show ? "block" : "none")} !important;

  img {
    width: 85px;
    height: auto;
  }
`;

export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 20px;
`;

export const HeaderButton = styled.a`
  width: 178px;
  height: 30px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 10px 14px;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const UserButton = styled.button`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.primary};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: color 0.3s ease;

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${({ theme }) => theme.colors.primary};
    border-bottom: 1.9px solid ${({ theme }) => theme.colors.primary};
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
    transition: border-color 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};

    &::after {
      border-left-color: ${({ theme }) => theme.colors.primaryHover};
      border-bottom-color: ${({ theme }) => theme.colors.primaryHover};
    }
  }

  body.dark-theme & {
    color: ${({ theme }) => theme.colors.white};

    &::after {
      border-left-color: ${({ theme }) => theme.colors.white};
      border-bottom-color: ${({ theme }) => theme.colors.white};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primaryHover};

      &::after {
        border-left-color: ${({ theme }) => theme.colors.primaryHover};
        border-bottom-color: ${({ theme }) => theme.colors.primaryHover};
      }
    }
  }
`;

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

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.3s ease;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    a {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
