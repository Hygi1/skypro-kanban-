import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {
  ExitContainer,
  ExitBlock,
  ExitTitle,
  ExitForm,
  ExitButtons,
  ExitButtonYes,
  ExitButtonNo,
} from "./ExitPage.styled";

const ExitPage = () => {
  const { handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleExit = () => {
    handleLogout();
    navigate("/login");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <ExitContainer>
      <ExitBlock>
        <ExitTitle>
          <h2>Выйти из аккаунта?</h2>
        </ExitTitle>
        <ExitForm>
          <ExitButtons>
            <ExitButtonYes onClick={handleExit}>Да, выйти</ExitButtonYes>
            <ExitButtonNo onClick={handleCancel}>Нет, остаться</ExitButtonNo>
          </ExitButtons>
        </ExitForm>
      </ExitBlock>
    </ExitContainer>
  );
};

export default ExitPage;
