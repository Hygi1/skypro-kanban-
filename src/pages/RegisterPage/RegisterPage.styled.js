import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #151419;
  padding: 20px;
`;

export const RegisterBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #20202c;
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #4e5566;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const RegisterTitle = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    color: #ffffff;
    margin-bottom: 20px;
  }
`;

export const RegisterForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RegisterInput = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  background-color: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 10px 8px;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  margin-bottom: 7px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94a6be;
  }

  &:focus {
    border-color: #565eef;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const RegisterButton = styled.button`
  width: 100%;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover:not(:disabled) {
    background-color: #33399b;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const RegisterLink = styled.div`
  text-align: center;

  p,
  a {
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
  }

  p {
    margin-bottom: 4px;
  }

  a {
    text-decoration: underline;
    transition: color 0.2s;

    &:hover {
      color: #565eef;
    }
  }
`;
