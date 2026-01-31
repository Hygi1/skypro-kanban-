import Card from "../Card/Card";
import { ColumnWrapper, ColumnTitle, CardsContainer } from "./Column.styled";

function Column({ title, cards }) {
  return (
    <ColumnWrapper className="main__column">
      <ColumnTitle className="column__title">
        <p>{title}</p>
      </ColumnTitle>
      <CardsContainer className="cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            topic={card.topic}
            title={card.title}
            date={card.date}
          />
        ))}
      </CardsContainer>
    </ColumnWrapper>
  );
}

export default Column;
