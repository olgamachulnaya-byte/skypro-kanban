import Column from '../Column/Column'

function Main({ columns }) {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columns.map((column) => (
              <Column key={column.title} title={column.title} cards={column.cards} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
