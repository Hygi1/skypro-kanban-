import { Link } from "react-router-dom";
import {
  NotFoundContainer,
  NotFoundCode,
  NotFoundText,
  NotFoundDescription,
  NotFoundButton,
} from "./NotFoundPage.styled";

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundCode>404</NotFoundCode>
      <NotFoundText>Страница не найдена</NotFoundText>
      <NotFoundDescription>
        Возможно, она была перемещена или вы неверно указали адрес страницы.
      </NotFoundDescription>
      <NotFoundButton as={Link} to="/" className="_hover01">
        На главную
      </NotFoundButton>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
