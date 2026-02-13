import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Calendar from "../../components/Calendar/Calendar";
import { useAuth } from "../../context/use-auth.jsx";
import { tasksAPI } from "../../services/tasks";
import {
  CardPageContainer,
  CardPageBlock,
  CardPageHeader,
  CardPageTitle,
  CardTheme,
  StatusContainer,
  StatusTitle,
  StatusButtons,
  StatusButton,
  ContentWrapper,
  FormColumn,
  DescriptionTextarea,
  CategoryContainer,
  CategoryTitle,
  ButtonGroup,
  ButtonsWrapper,
  TopButtons,
  BottomButton,
  ErrorMessage,
} from "./CardPage.styled";

const CardPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [category, setCategory] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState("");

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        setIsLoading(true);
        setError("");
        const tasks = await tasksAPI.getTasks();
        const foundCard = tasks.find((c) => c._id === id);

        if (foundCard) {
          setCard(foundCard);
          setDescription(foundCard.description || "");
          setTitle(foundCard.title || "");
          setSelectedStatus(foundCard.status || "Без статуса");
          setCategory(foundCard.topic || "Research");
          if (foundCard.date) {
            setSelectedDate(new Date(foundCard.date));
          }
        } else {
          setError("Задача не найдена");
        }
      } catch (err) {
        setError(err.message || "Не удалось загрузить задачу");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCard();
  }, [id]);

  const handleSave = async () => {
    if (!title.trim()) {
      setError("Введите название задачи");
      return;
    }

    try {
      setError("");
      const taskData = {
        title: title.trim(),
        description: description.trim(),
        status: selectedStatus,
        topic: category,
        date: selectedDate
          ? selectedDate.toISOString()
          : new Date().toISOString(),
      };

      await tasksAPI.updateTask(id, taskData);
      setIsEditing(false);
      navigate("/");
    } catch (err) {
      setError(err.message || "Не удалось сохранить задачу");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Вы действительно хотите удалить эту задачу?")) {
      try {
        await tasksAPI.deleteTask(id);
        navigate("/");
      } catch (err) {
        setError(err.message || "Не удалось удалить задачу");
      }
    }
  };

  const handleCancel = () => {
    if (isEditing) {
      setIsEditing(false);
      if (card) {
        setDescription(card.description || "");
        setTitle(card.title || "");
        setSelectedStatus(card.status || "Без статуса");
        setCategory(card.topic || "Research");
      }
    } else {
      navigate("/");
    }
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const getThemeColor = (topic) => {
    switch (topic) {
      case "Web Design":
        return "orange";
      case "Research":
        return "green";
      case "Copywriting":
        return "purple";
      default:
        return "gray";
    }
  };

  if (!isLoggedIn) {
    return null;
  }

  if (isLoading) {
    return (
      <>
        <Header />
        <CardPageContainer>
          <CardPageBlock>
            <div style={{ textAlign: "center", padding: "40px" }}>
              Загрузка карточки...
            </div>
          </CardPageBlock>
        </CardPageContainer>
      </>
    );
  }

  if (error && !card) {
    return (
      <>
        <Header />
        <CardPageContainer>
          <CardPageBlock>
            <CardPageHeader>
              <CardPageTitle>Задача не найдена</CardPageTitle>
            </CardPageHeader>
            <ErrorMessage>{error}</ErrorMessage>
            <Link to="/" className="btn-browse__close _btn-bg _hover01">
              На главную
            </Link>
          </CardPageBlock>
        </CardPageContainer>
      </>
    );
  }

  return (
    <>
      <Header />
      <CardPageContainer>
        <CardPageBlock>
          {error && <ErrorMessage>{error}</ErrorMessage>}

          <CardPageHeader>
            <div>
              {isEditing ? (
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    padding: "5px",
                    width: "100%",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />
              ) : (
                <CardPageTitle>{card?.title}</CardPageTitle>
              )}
              <p
                style={{ fontSize: "14px", color: "#94A6BE", marginTop: "5px" }}
              >
                ID карточки: {id}
              </p>
            </div>
            {!isEditing && (
              <CardTheme
                $color={getThemeColor(category)}
                className={`_${getThemeColor(category)} _active-category`}
              >
                <p className={`_${getThemeColor(category)}`}>{category}</p>
              </CardTheme>
            )}
          </CardPageHeader>

          <StatusContainer>
            <StatusTitle className="subttl">Статус</StatusTitle>
            <StatusButtons>
              {statuses.map((status) => (
                <StatusButton
                  key={status}
                  className={`${
                    selectedStatus === status ? "_gray _active" : ""
                  } ${isEditing ? "editable" : ""}`}
                  onClick={() => isEditing && setSelectedStatus(status)}
                  style={{
                    display:
                      isEditing || selectedStatus === status
                        ? "inline-block"
                        : "none",
                    cursor: isEditing ? "pointer" : "default",
                    opacity: isEditing && selectedStatus !== status ? 0.4 : 1,
                  }}
                >
                  {status}
                </StatusButton>
              ))}
            </StatusButtons>
          </StatusContainer>

          <ContentWrapper>
            <FormColumn>
              <StatusTitle className="subttl">Описание задачи</StatusTitle>
              <DescriptionTextarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Введите описание задачи..."
                disabled={!isEditing}
              />
            </FormColumn>

            <FormColumn>
              <div style={{ width: "182px" }}>
                <Calendar
                  isReadonly={!isEditing}
                  selectedDate={selectedDate}
                  onDateSelect={handleDateSelect}
                />
              </div>
            </FormColumn>
          </ContentWrapper>

          <CategoryContainer>
            <CategoryTitle className="subttl">Категория</CategoryTitle>
            <CardTheme
              $color={getThemeColor(category)}
              className={`_${getThemeColor(category)} _active-category`}
              style={{ cursor: "default" }}
            >
              <p className={`_${getThemeColor(category)}`}>{category}</p>
            </CardTheme>
          </CategoryContainer>

          {isEditing ? (
            <ButtonsWrapper>
              <TopButtons>
                <ButtonGroup>
                  <button
                    className="btn-edit__edit _btn-bg _hover01"
                    onClick={handleSave}
                  >
                    Сохранить
                  </button>
                  <button
                    className="btn-edit__edit _btn-bor _hover03"
                    onClick={handleCancel}
                  >
                    Отменить
                  </button>
                  <button
                    className="btn-edit__delete _btn-bor _hover03"
                    onClick={handleDelete}
                  >
                    Удалить задачу
                  </button>
                </ButtonGroup>
                <BottomButton
                  className="btn-edit__close _btn-bg _hover01"
                  onClick={handleCancel}
                >
                  Закрыть
                </BottomButton>
              </TopButtons>
            </ButtonsWrapper>
          ) : (
            <ButtonsWrapper>
              <TopButtons>
                <ButtonGroup>
                  <button
                    className="btn-browse__edit _btn-bor _hover03"
                    onClick={() => setIsEditing(true)}
                  >
                    Редактировать задачу
                  </button>
                  <button
                    className="btn-browse__delete _btn-bor _hover03"
                    onClick={handleDelete}
                  >
                    Удалить задачу
                  </button>
                </ButtonGroup>
                <BottomButton
                  className="btn-browse__close _btn-bg _hover01"
                  onClick={handleCancel}
                >
                  Закрыть
                </BottomButton>
              </TopButtons>
            </ButtonsWrapper>
          )}
        </CardPageBlock>
      </CardPageContainer>
    </>
  );
};

export default CardPage;
