import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Calendar from "../../components/Calendar/Calendar";
import { ThemeToggleContext } from "../../context/ThemeContext";
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
  CategoryButtons,
  CategoryButton,
  SubmitButton,
} from "./AddCardPage.styled";

const AddCardPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [category, setCategory] = useState("orange");
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(ThemeToggleContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Введите название задачи");
      return;
    }

    console.log("Новая задача:", {
      title,
      description,
      category,
      date: selectedDate || new Date(),
    });

    navigate("/");
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const categories = [
    { id: "orange", label: "Web Design", color: "orange" },
    { id: "green", label: "Research", color: "green" },
    { id: "purple", label: "Copywriting", color: "purple" },
  ];

  if (!isLoggedIn) {
    navigate("/login");
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
                  />
                </FormGroup>
              </FormColumn>

              <FormColumn>
                <div className="pop-new-card__calendar calendar">
                  <CategoriesTitle className="subttl">Даты</CategoriesTitle>
                  <Calendar onDateSelect={handleDateSelect} />
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
                  >
                    <p className={`_${cat.color}`}>{cat.label}</p>
                  </CategoryButton>
                ))}
              </CategoriesContainer>
            </FormGroup>

            <SubmitButton type="submit" className="_hover01">
              Создать задачу
            </SubmitButton>
          </form>
        </AddCardBlock>
      </AddCardContainer>
    </>
  );
};

export default AddCardPage;
