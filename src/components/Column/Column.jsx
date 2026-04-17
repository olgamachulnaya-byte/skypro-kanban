import Card from '../Card/Card'

function Column({ title, cards }) {
  const topicClasses = {
    'Web Design': '_orange',
    Research: '_green',
    Copywriting: '_purple',
  }

  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>

      <div className="cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            themeClass={topicClasses[card.topic]}
            themeText={card.topic}
            title={card.title}
            date={card.date}
          />
        ))}
      </div>
    </div>
  )
}

export default Column
