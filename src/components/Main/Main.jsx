import Column from '../Column/Column'

function Main({ columns, cards, isLoading }) {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
             {isLoading ? (
              <div className="main__loading">Данные загружаются</div>
            ) : (
              columns.map((column) => (
                <Column
                  key={column.title}
                  title={column.title}
                  cards={cards.filter((card) => card.status === column.title)}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
