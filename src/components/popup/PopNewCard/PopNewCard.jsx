import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "../../Calendar/Calendar";
import { tasksAPI } from "../../../services/tasks";

const Content = styled.div`
  width: 100%;
`;

const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #94a6be;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Wrap = styled.div`
  display: flex;
  gap: 21px;
  margin-bottom: 20px;

  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

const FormBlock = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: #94a6be;
  }

  body.dark-theme & {
    background-color: ${({ theme }) => theme.colors.darkBg};
    border-color: ${({ theme }) => theme.colors.darkBorder};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  min-height: 200px;
  resize: vertical;
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: #94a6be;
  }

  body.dark-theme & {
    background-color: ${({ theme }) => theme.colors.darkBg};
    border-color: ${({ theme }) => theme.colors.darkBorder};
  }
`;

const CalendarWrapper = styled.div`
  width: 182px;
`;

const Categories = styled.div`
  margin-bottom: 20px;
`;

const CategoriesTitle = styled.p`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 600;
`;

const Themes = styled.div`
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
`;

const ThemeButton = styled.button`
  padding: 8px 20px;
  border-radius: 24px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${({ $color, theme }) =>
    $color === "orange"
      ? theme.colors.orangeBg
      : $color === "green"
      ? theme.colors.greenBg
      : $color === "purple"
      ? theme.colors.purpleBg
      : theme.colors.gray};
  color: ${({ $color, theme }) =>
    $color === "orange"
      ? theme.colors.orange
      : $color === "green"
      ? theme.colors.green
      : $color === "purple"
      ? theme.colors.purple
      : theme.colors.white};

  &.active {
    opacity: 1;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }
`;

const CreateButton = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  float: right;
  transition: background-color 0.3s;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primaryHover};
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

const PopNewCard = ({ onClose, onTaskCreated }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [category, setCategory] = useState("Research");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const categories = [
    { id: "Web Design", label: "Web Design", color: "orange" },
    { id: "Research", label: "Research", color: "green" },
    { id: "Copywriting", label: "Copywriting", color: "purple" },
  ];

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

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

      if (onTaskCreated) {
        onTaskCreated();
      }

      onClose();
    } catch (err) {
      setError(err.message || "Не удалось создать задачу");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Content>
      <Title>Создание задачи</Title>
      <CloseButton onClick={onClose}>&#10006;</CloseButton>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <form onSubmit={handleSubmit}>
        <Wrap>
          <div style={{ flex: 1 }}>
            <FormBlock>
              <Label htmlFor="formTitle">Название задачи</Label>
              <Input
                type="text"
                id="formTitle"
                placeholder="Введите название задачи..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
                required
                disabled={isSubmitting}
              />
            </FormBlock>
            <FormBlock>
              <Label htmlFor="textArea">Описание задачи</Label>
              <Textarea
                id="textArea"
                placeholder="Введите описание задачи..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={isSubmitting}
              />
            </FormBlock>
          </div>
          <CalendarWrapper>
            <CategoriesTitle>Даты</CategoriesTitle>
            <Calendar
              onDateSelect={handleDateSelect}
              selectedDate={selectedDate}
            />
          </CalendarWrapper>
        </Wrap>

        <Categories>
          <CategoriesTitle>Категория</CategoriesTitle>
          <Themes>
            {categories.map((cat) => (
              <ThemeButton
                key={cat.id}
                type="button"
                $color={cat.color}
                className={category === cat.id ? "active" : ""}
                onClick={() => setCategory(cat.id)}
                disabled={isSubmitting}
              >
                {cat.label}
              </ThemeButton>
            ))}
          </Themes>
        </Categories>

        <CreateButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Создание..." : "Создать задачу"}
        </CreateButton>
      </form>
    </Content>
  );
};

export default PopNewCard;
