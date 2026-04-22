import Card from '../Card/Card'
import { CardsList, ColumnRoot, ColumnTitle } from './Column.styled'

function Column({ title, cards }) {
  const topicClasses = {
    'Web Design': '_orange',
    Research: '_green',
    Copywriting: '_purple',
  }

  return (
    <ColumnRoot>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>

      <CardsList>
        {cards.map((card) => (
          <Card
            key={card.id}
            themeClass={topicClasses[card.topic]}
            themeText={card.topic}
            title={card.title}
            date={card.date}
          />
        ))}
      </CardsList>
    </ColumnRoot>
  )
}

export default Column
