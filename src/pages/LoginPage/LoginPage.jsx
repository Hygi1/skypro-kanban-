import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
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
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, handleLogin } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const validateForm = () => {
    if (!email.trim()) {
      return "Введите электронную почту";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Введите корректный email";
    }

    if (!password) {
      return "Введите пароль";
    }

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      console.log("Вход:", { email, password });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      handleLogin();
    } catch {
      setError("Неверный email или пароль");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoggedIn) {
    return null;
  }

  return (
    <LoginContainer>
      <LoginBlock>
        <LoginTitle>
          <h2>Вход</h2>
        </LoginTitle>

        {error && (
          <div
            style={{
              color: "#FF6D00",
              backgroundColor: "rgba(255, 109, 0, 0.1)",
              padding: "12px 16px",
              borderRadius: "8px",
              marginBottom: "20px",
              fontSize: "14px",
              lineHeight: "1.4",
              borderLeft: "4px solid #FF6D00",
            }}
          >
            {error}
          </div>
        )}

        <LoginForm onSubmit={handleSubmit}>
          <LoginInput
            type="email"
            placeholder="Эл. почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
          />
          <LoginInput
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isSubmitting}
          />
          <LoginButton
            type="submit"
            className="_hover01"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Вход..." : "Войти"}
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
