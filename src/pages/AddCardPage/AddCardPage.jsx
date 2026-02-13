import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Calendar from "../../components/Calendar/Calendar";
import { useAuth } from "../../context/use-auth.jsx";
import { tasksAPI } from "../../services/tasks";
import {
  AddCardContainer,
  AddCardBlock,
  AddCardTitle,
  TitleText,
  CloseButton,
  FormWrapper,
  FormColumn,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  CategoriesTitle,
  CategoriesContainer,
  CategoryButton,
  SubmitButton,
  ErrorMessage,
} from "./AddCardPage.styled";

const AddCardPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [category, setCategory] = useState("Research");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Введите название задачи");
      return;
    }

    try {
      setIsSubmitting(true);
      setError("");

      const taskData = {
        title: title.trim(),
        description: description.trim(),
        topic: category,
        status: "Без статуса",
        date: selectedDate
          ? selectedDate.toISOString()
          : new Date().toISOString(),
      };

      await tasksAPI.createTask(taskData);
      navigate("/");
    } catch (err) {
      setError(err.message || "Не удалось создать задачу");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const categories = [
    { id: "Web Design", label: "Web Design", color: "orange" },
    { id: "Research", label: "Research", color: "green" },
    { id: "Copywriting", label: "Copywriting", color: "purple" },
  ];

  if (!isLoggedIn) {
    return null;
  }

  return (
    <>
      <Header />
      <AddCardContainer>
        <AddCardBlock>
          <AddCardTitle>
            <TitleText>Создание задачи</TitleText>
            <CloseButton as={Link} to="/">
              &#10006;
            </CloseButton>
          </AddCardTitle>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <form onSubmit={handleSubmit}>
            <FormWrapper>
              <FormColumn>
                <FormGroup>
                  <FormLabel htmlFor="formTitle" className="subttl">
                    Название задачи
                  </FormLabel>
                  <FormInput
                    type="text"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                    required
                    disabled={isSubmitting}
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="textArea" className="subttl">
                    Описание задачи
                  </FormLabel>
                  <FormTextarea
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    disabled={isSubmitting}
                  />
                </FormGroup>
              </FormColumn>

              <FormColumn>
                <div className="pop-new-card__calendar calendar">
                  <CategoriesTitle className="subttl">Даты</CategoriesTitle>
                  <Calendar
                    onDateSelect={handleDateSelect}
                    selectedDate={selectedDate}
                  />
                </div>
              </FormColumn>
            </FormWrapper>

            <FormGroup>
              <CategoriesTitle className="subttl">Категория</CategoriesTitle>
              <CategoriesContainer className="categories__themes">
                {categories.map((cat) => (
                  <CategoryButton
                    key={cat.id}
                    type="button"
                    className={`categories__theme _${cat.color} ${
                      category === cat.id ? "_active-category" : ""
                    }`}
                    onClick={() => setCategory(cat.id)}
                    disabled={isSubmitting}
                  >
                    <p className={`_${cat.color}`}>{cat.label}</p>
                  </CategoryButton>
                ))}
              </CategoriesContainer>
            </FormGroup>

            <SubmitButton
              type="submit"
              className="_hover01"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Создание..." : "Создать задачу"}
            </SubmitButton>
          </form>
        </AddCardBlock>
      </AddCardContainer>
    </>
  );
};

export default AddCardPage;
