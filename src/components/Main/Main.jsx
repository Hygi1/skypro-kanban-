import { useState, useEffect } from "react";
import Column from "../Column/Column";
import { cards } from "../../data.js";
import { MainWrapper, MainBlock, MainContent, Loading } from "./Main.styled";

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCardsData(cards);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const columns = [
    {
      title: "Без статуса",
      cards: cardsData.filter((card) => card.status === "Без статуса"),
    },
    {
      title: "Нужно сделать",
      cards: cardsData.filter((card) => card.status === "Нужно сделать"),
    },
    {
      title: "В работе",
      cards: cardsData.filter((card) => card.status === "В работе"),
    },
    {
      title: "Тестирование",
      cards: cardsData.filter((card) => card.status === "Тестирование"),
    },
    {
      title: "Готово",
      cards: cardsData.filter((card) => card.status === "Готово"),
    },
  ];

  return (
    <MainWrapper>
      <div className="container">
        <MainBlock>
          {isLoading ? (
            <Loading>Данные загружаются...</Loading>
          ) : (
            <MainContent>
              {columns.map((column, index) => (
                <Column key={index} title={column.title} cards={column.cards} />
              ))}
            </MainContent>
          )}
        </MainBlock>
      </div>
    </MainWrapper>
  );
}

export default Main;
