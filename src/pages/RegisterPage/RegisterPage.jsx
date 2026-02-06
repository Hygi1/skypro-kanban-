import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ThemeToggleContext } from "../../context/ThemeContext";
import {
  RegisterContainer,
  RegisterBlock,
  RegisterTitle,
  RegisterForm,
  RegisterInput,
  RegisterButton,
  RegisterLink,
} from "./RegisterPage.styled";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { handleLogin } = useContext(ThemeToggleContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      handleLogin();
      navigate("/");
    }
  };

  return (
    <RegisterContainer>
      <RegisterBlock>
        <RegisterTitle>
          <h2>Регистрация</h2>
        </RegisterTitle>
        <RegisterForm onSubmit={handleSubmit}>
          <RegisterInput
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <RegisterInput
            type="email"
            placeholder="Эл. почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <RegisterInput
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <RegisterButton type="submit" className="_hover01">
            Зарегистрироваться
          </RegisterButton>
        </RegisterForm>
        <RegisterLink>
          <p>
            Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
          </p>
        </RegisterLink>
      </RegisterBlock>
    </RegisterContainer>
  );
};

export default RegisterPage;
