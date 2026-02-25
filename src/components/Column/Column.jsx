import Card from "../Card/Card";
import { ColumnWrapper, ColumnTitle, CardsContainer } from "./Column.styled";

function Column({ title, cards = [], onCardClick }) {
  return (
    <ColumnWrapper className="main__column">
      <ColumnTitle className="column__title">
        <p>{title}</p>
      </ColumnTitle>
      <CardsContainer className="cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={() => onCardClick(card.id)}
          />
        ))}
      </CardsContainer>
    </ColumnWrapper>
  );
}

export default Column;
