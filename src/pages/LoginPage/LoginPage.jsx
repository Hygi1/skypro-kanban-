import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ThemeToggleContext } from "../../context/ThemeContext";
import {
  LoginContainer,
  LoginBlock,
  LoginTitle,
  LoginForm,
  LoginInput,
  LoginButton,
  LoginLink,
} from "./LoginPage.styled";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { handleLogin } = useContext(ThemeToggleContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      handleLogin();
      navigate("/");
    }
  };

  return (
    <LoginContainer>
      <LoginBlock>
        <LoginTitle>
          <h2>Вход</h2>
        </LoginTitle>
        <LoginForm onSubmit={handleSubmit}>
          <LoginInput
            type="email"
            placeholder="Эл. почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <LoginInput
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <LoginButton type="submit" className="_hover01">
            Войти
          </LoginButton>
          <LoginLink>
            <p>Нужно зарегистрироваться?</p>
            <Link to="/register">Регистрируйтесь здесь</Link>
          </LoginLink>
        </LoginForm>
      </LoginBlock>
    </LoginContainer>
  );
};

export default LoginPage;
