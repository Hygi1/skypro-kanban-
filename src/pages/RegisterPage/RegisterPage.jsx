import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
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
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const { isLoggedIn, handleLogin } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) setError("");
  };

  const validateForm = () => {
    const { name, email, password } = formData;

    if (!name.trim()) {
      return "Введите имя";
    }

    if (!email.trim()) {
      return "Введите электронную почту";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Введите корректный email";
    }

    if (!password) {
      return "Введите пароль";
    }

    if (password.length < 6) {
      return "Пароль должен содержать минимум 6 символов";
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
      console.log("Регистрация:", formData);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      handleLogin();
    } catch {
      setError("Произошла ошибка при регистрации. Попробуйте еще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoggedIn) {
    return null;
  }

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
            id="name"
            name="name"
            placeholder="Имя"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
          <RegisterInput
            type="email"
            id="email"
            name="email"
            placeholder="Эл. почта"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
          <RegisterInput
            type="password"
            id="password"
            name="password"
            placeholder="Пароль"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={isSubmitting}
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
