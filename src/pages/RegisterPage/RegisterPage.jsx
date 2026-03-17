import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/use-auth.jsx";
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
  const [formData, setFormData] = useState({
    login: "",
    name: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, register } = useAuth();

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const validateForm = () => {
    const { login, name, password } = formData;
    if (!login.trim()) return "Введите логин";
    if (!name.trim()) return "Введите имя";
    if (!password) return "Введите пароль";
    if (password.length < 6)
      return "Пароль должен содержать минимум 6 символов";
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
      const result = await register(
        formData.login,
        formData.name,
        formData.password
      );
      if (!result.success) setError(result.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoggedIn) return null;

  return (
    <RegisterContainer>
      <RegisterBlock>
        <RegisterTitle>
          <h2>Регистрация</h2>
        </RegisterTitle>
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
        <RegisterForm onSubmit={handleSubmit}>
          <RegisterInput
            type="text"
            name="login"
            placeholder="Логин"
            value={formData.login}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            autoComplete="username"
          />
          <RegisterInput
            type="text"
            name="name"
            placeholder="Имя"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            autoComplete="name"
          />
          <RegisterInput
            type="password"
            name="password"
            placeholder="Пароль"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            autoComplete="new-password"
          />
          <RegisterButton
            type="submit"
            className="_hover01"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Регистрация..." : "Зарегистрироваться"}
          </RegisterButton>
          <RegisterLink>
            <p>Уже есть аккаунт?</p>
            <Link to="/login">Войдите здесь</Link>
          </RegisterLink>
        </RegisterForm>
      </RegisterBlock>
    </RegisterContainer>
  );
};

export default RegisterPage;
