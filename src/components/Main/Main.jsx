import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Column from "../Column/Column";
import Calendar from "../Calendar/Calendar";
import { cards as initialCards } from "../../data";
import {
  MainWrapper,
  MainBlock,
  MainTitle,
  MainContent,
  MainSidebar,
  MainColumns,
  MainCalendar,
  CalendarText,
} from "./Main.styled";

function Main() {
  const [cards, setCards] = useState([]);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setCards(initialCards);

      const today = new Date();
      const formattedDate = today.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      setCurrentDate(formattedDate);
    }, 500);
  }, []);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const getCardsByStatus = (status) => {
    return cards.filter((card) => card.status === status);
  };

  return (
    <MainWrapper>
      <div className="container">
        <MainBlock>
          <MainTitle>Мой проект</MainTitle>
          <MainContent>
            <MainSidebar>
              <MainCalendar>
                <Calendar isReadonly={true} />
                <CalendarText>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M14 2.66675H2C1.264 2.66675 0.666664 3.26408 0.666664 4.00008V14.0001C0.666664 14.7361 1.264 15.3334 2 15.3334H14C14.736 15.3334 15.3333 14.7361 15.3333 14.0001V4.00008C15.3333 3.26408 14.736 2.66675 14 2.66675Z"
                      stroke="#94A6BE"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.3333 6.66675H0.666664M5.33333 1.33341V4.00008V1.33341ZM10.6667 1.33341V4.00008V1.33341Z"
                      stroke="#94A6BE"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {currentDate}
                </CalendarText>
              </MainCalendar>
            </MainSidebar>

            <MainColumns>
              {statuses.map((status) => (
                <Column
                  key={status}
                  title={status}
                  cards={getCardsByStatus(status)}
                />
              ))}
            </MainColumns>
          </MainContent>
        </MainBlock>
      </div>
    </MainWrapper>
  );
}

export default Main;
