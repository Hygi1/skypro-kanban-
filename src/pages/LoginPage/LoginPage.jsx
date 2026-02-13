import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/use-auth.jsx";
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
  const [formData, setFormData] = useState({ login: "", password: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, login } = useAuth();

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const validate = () => {
    if (!formData.login) return "Введите логин";
    if (!formData.password) return "Введите пароль";
    if (formData.password.length < 6) return "Пароль не менее 6 символов";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setIsSubmitting(true);
    setError("");
    try {
      const result = await login(formData.login, formData.password);
      if (!result.success) setError(result.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoggedIn) return null;

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
              borderLeft: "4px solid #FF6D00",
            }}
          >
            {error}
          </div>
        )}
        <LoginForm onSubmit={handleSubmit}>
          <LoginInput
            type="text"
            name="login"
            placeholder="Логин"
            value={formData.login}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            autoComplete="username"
          />
          <LoginInput
            type="password"
            name="password"
            placeholder="Пароль"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            autoComplete="current-password"
          />
          <LoginButton type="submit" disabled={isSubmitting}>
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
