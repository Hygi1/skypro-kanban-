import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: 0.3s;

  &.confirm {
    background-color: #565eef;
    color: white;
    &:hover {
      background-color: #33399b;
    }
  }

  &.cancel {
    background: transparent;
    border: 1px solid #565eef;
    color: #565eef;
    &:hover {
      background-color: #565eef;
      color: white;
    }
  }
`;

const ExitModal = ({ onConfirm, onCancel }) => {
  return (
    <Container>
      <Title>Выйти из аккаунта?</Title>
      <ButtonGroup>
        <Button className="confirm" onClick={onConfirm}>
          Да, выйти
        </Button>
        <Button className="cancel" onClick={onCancel}>
          Нет, остаться
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default ExitModal;
