import { Container } from '../../App.styled'
import Column from '../Column/Column'
import { Loading, MainBlock, MainContent, MainRoot } from './Main.styled'

function Main({ columns, cards, isLoading, error }) {
  return (
    <MainRoot>
      <Container>
        <MainBlock>
          <MainContent>
            {isLoading ? (
              <Loading>Данные загружаются</Loading>
               ) : error ? (
              <Loading style={{ color: '#ff4d4f' }}>{error}</Loading>
            ) : (
              columns.map((column) => (
                <Column key={column.title} title={column.title} cards={cards.filter((card) => card.status === column.title)} />
              ))
            )}
          </MainContent>
        </MainBlock>
      </Container>
    </MainRoot>
  )
}

export default Main
