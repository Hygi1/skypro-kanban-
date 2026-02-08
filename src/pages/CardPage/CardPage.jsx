import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Calendar from "../../components/Calendar/Calendar";
import { cards as initialCards } from "../../data";
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
} from "./CardPage.styled";

const CardPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundCard = initialCards.find((c) => c.id === parseInt(id));
      if (foundCard) {
        setCard(foundCard);
        setDescription(foundCard.title);
        setSelectedStatus(foundCard.status);
      }
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [id]);

  const handleSave = () => {
    if (!description.trim()) {
      alert("Введите описание задачи");
      return;
    }

    console.log("Сохранение задачи:", {
      id,
      description,
      status: selectedStatus,
    });

    setIsEditing(false);

    navigate("/");
  };

  const handleDelete = () => {
    if (window.confirm("Вы действительно хотите удалить эту задачу?")) {
      console.log("Удаление карточки:", id);

      navigate("/");
    }
  };

  const handleCancel = () => {
    if (isEditing) {
      setIsEditing(false);
      if (card) {
        setDescription(card.title);
        setSelectedStatus(card.status);
      }
    } else {
      navigate("/");
    }
  };

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

  if (!card) {
    return (
      <>
        <Header />
        <CardPageContainer>
          <CardPageBlock>
            <CardPageHeader>
              <CardPageTitle>Задача не найдена</CardPageTitle>
            </CardPageHeader>
            <p style={{ color: "#94A6BE", marginBottom: "20px" }}>
              Карточка с ID {id} не существует
            </p>
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
          <CardPageHeader>
            <div>
              <CardPageTitle>{card.title}</CardPageTitle>
              <p
                style={{ fontSize: "14px", color: "#94A6BE", marginTop: "5px" }}
              >
                ID карточки: {id}
              </p>
            </div>
            <CardTheme
              $color={card.theme}
              className={`_${card.theme} _active-category`}
            >
              <p className={`_${card.theme}`}>{card.category}</p>
            </CardTheme>
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
                <Calendar isReadonly={!isEditing} />
              </div>
            </FormColumn>
          </ContentWrapper>

          <CategoryContainer>
            <CategoryTitle className="subttl">Категория</CategoryTitle>
            <CardTheme
              $color={card.theme}
              className={`_${card.theme} _active-category`}
              style={{ cursor: "default" }}
            >
              <p className={`_${card.theme}`}>{card.category}</p>
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
                    id="btnDelete"
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
