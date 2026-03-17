import { useState, useEffect } from "react";
import { useTasks } from "../../context/TasksContext";
import Calendar from "../Calendar/Calendar";
import CategoryBadge from "../CategoryBadge/CategoryBadge";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;

  @media (max-width: 495px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  flex: 1;
`;

const StatusContainer = styled.div`
  margin-bottom: 11px;
`;

const StatusTitle = styled.p`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 600;
`;

const StatusButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

const StatusButton = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  font-size: 14px;
  cursor: ${({ $editable }) => ($editable ? "pointer" : "default")};

  &.active {
    background: #94a6be;
    color: white;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 21px;
  margin-bottom: 20px;

  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

const DescriptionColumn = styled.div`
  flex: 1;
`;

const DescriptionLabel = styled.p`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 600;
`;

const DescriptionText = styled.textarea`
  width: 100%;
  padding: 14px;
  background: ${({ theme }) => theme.colors.darkGray};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  min-height: 200px;
  resize: vertical;
  color: ${({ theme }) => theme.colors.text};

  &:disabled {
    cursor: not-allowed;
  }

  body.dark-theme & {
    background: ${({ theme }) => theme.colors.darkBg};
  }
`;

const CalendarColumn = styled.div`
  width: 182px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 20px;

  button {
    height: 30px;
    padding: 0 14px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  .btn-primary {
    background-color: #565eef;
    border: none;
    color: white;
    &:hover:not(:disabled) {
      background-color: #33399b;
    }
  }

  .btn-secondary {
    background: transparent;
    border: 0.7px solid #565eef;
    color: #565eef;
    &:hover:not(:disabled) {
      background-color: #565eef;
      color: white;
      border-color: #565eef;
    }
  }

  .btn-danger {
    background: transparent;
    border: 0.7px solid #ff6d00;
    color: #ff6d00;
    &:hover:not(:disabled) {
      background-color: #ff6d00;
      color: white;
      border-color: #ff6d00;
    }
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #ff6d00;
  background-color: rgba(255, 109, 0, 0.1);
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 14px;
  border-left: 4px solid #ff6d00;
`;

const CardDetails = ({ cardId, onClose }) => {
  const { tasks, updateTask, deleteTask } = useTasks();
  const [card, setCard] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedStatus, setEditedStatus] = useState("");
  const [editedCategory, setEditedCategory] = useState("");
  const [editedDate, setEditedDate] = useState(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  useEffect(() => {
    const found = tasks.find((t) => t._id === cardId);
    if (found) {
      setCard(found);
      setEditedTitle(found.title);
      setEditedDescription(found.description || "");
      setEditedStatus(found.status || "Без статуса");
      setEditedCategory(found.topic || "Research");
      setEditedDate(found.date ? new Date(found.date) : null);
    }
  }, [cardId, tasks]);

  const handleSave = async () => {
    if (!editedTitle.trim()) {
      setError("Введите название задачи");
      return;
    }
    try {
      setIsSubmitting(true);
      setError("");
      const result = await updateTask(cardId, {
        title: editedTitle.trim(),
        description: editedDescription.trim(),
        status: editedStatus,
        topic: editedCategory,
        date: editedDate ? editedDate.toISOString() : new Date().toISOString(),
      });
      if (result.success) {
        setIsEditing(false);
      } else {
        setError(result.error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Удалить задачу?")) return;
    try {
      setIsSubmitting(true);
      const result = await deleteTask(cardId);
      if (result.success) {
        onClose();
      } else {
        setError(result.error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    if (card) {
      setEditedTitle(card.title);
      setEditedDescription(card.description || "");
      setEditedStatus(card.status || "Без статуса");
      setEditedCategory(card.topic || "Research");
      setEditedDate(card.date ? new Date(card.date) : null);
    }
    setError("");
  };

  if (!card) return null;

  return (
    <Container>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Header>
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
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
          <Title>{card.title}</Title>
        )}
        {!isEditing && <CategoryBadge category={card.topic} />}
      </Header>

      <StatusContainer>
        <StatusTitle>Статус</StatusTitle>
        <StatusButtons>
          {statuses.map((status) => (
            <StatusButton
              key={status}
              className={editedStatus === status ? "active" : ""}
              $editable={isEditing}
              onClick={() => isEditing && setEditedStatus(status)}
              style={{
                display:
                  isEditing || editedStatus === status
                    ? "inline-block"
                    : "none",
              }}
            >
              {status}
            </StatusButton>
          ))}
        </StatusButtons>
      </StatusContainer>

      <ContentWrapper>
        <DescriptionColumn>
          <DescriptionLabel>Описание задачи</DescriptionLabel>
          <DescriptionText
            value={isEditing ? editedDescription : card.description}
            onChange={(e) => isEditing && setEditedDescription(e.target.value)}
            disabled={!isEditing}
            placeholder="Введите описание..."
          />
        </DescriptionColumn>
        <CalendarColumn>
          <DescriptionLabel>Даты</DescriptionLabel>
          <Calendar
            isReadonly={!isEditing}
            selectedDate={editedDate}
            onDateSelect={setEditedDate}
          />
        </CalendarColumn>
      </ContentWrapper>

      <ButtonGroup>
        {isEditing ? (
          <>
            <button
              className="btn-primary"
              onClick={handleSave}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Сохранение..." : "Сохранить"}
            </button>
            <button
              className="btn-secondary"
              onClick={handleCancel}
              disabled={isSubmitting}
            >
              Отменить
            </button>
            <button
              className="btn-danger"
              onClick={handleDelete}
              disabled={isSubmitting}
            >
              Удалить
            </button>
          </>
        ) : (
          <>
            <button
              className="btn-secondary"
              onClick={() => setIsEditing(true)}
            >
              Редактировать
            </button>
            <button className="btn-danger" onClick={handleDelete}>
              Удалить
            </button>
          </>
        )}
        <button className="btn-secondary" onClick={onClose}>
          Закрыть
        </button>
      </ButtonGroup>
    </Container>
  );
};

export default CardDetails;
