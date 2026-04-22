import { useEffect, useState } from 'react'
import { AppWrapper } from '../App.styled'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import { cardList } from '../data'
import { columns, currentUser } from '../data/mockData'

function BoardPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [cards, setCards] = useState([])

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCards(cardList)
      setIsLoading(false)
    }, 600)

    return () => clearTimeout(timerId)
  }, [])

  return (
    <AppWrapper>
      <Header user={currentUser} />
      <Main columns={columns} cards={cards} isLoading={isLoading} />
    </AppWrapper>
  )
}

export default BoardPage