import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/use-auth.jsx";
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
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleExit = () => {
    logout();
    navigate("/login");
  };

  const handleCancel = () => {
    navigate(-1);
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
