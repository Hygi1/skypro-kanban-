import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Column from "../../components/Column/Column";
import { cards } from "../../data";
import { MainBlock, MainContent, MainColumn, Loading } from "./MainPage.styled";

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setCardsData(cards);
      setIsLoading(false);
    }, 2000);
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
    <>
      <Header />
      <main className="main">
        <div className="container">
          <MainBlock>
            {isLoading ? (
              <Loading>Загрузка данных...</Loading>
            ) : (
              <MainContent>
                {columns.map((column, index) => (
                  <MainColumn key={index}>
                    <Column title={column.title} cards={column.cards} />
                  </MainColumn>
                ))}
              </MainContent>
            )}
          </MainBlock>
        </div>
      </main>
    </>
  );
};

export default MainPage;
