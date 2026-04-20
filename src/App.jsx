import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopBrowse from './components/PopBrowse/PopBrowse'
import PopExit from './components/PopExit/PopExit'
import PopNewCard from './components/PopNewCard/PopNewCard'
import { cardList } from './data'
import { columns, currentUser } from './data/mockData'
import { AppWrapper } from './App.styled'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [cards, setCards] = useState([])

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCards(cardList)
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timerId)
  }, [])

  return (
    <AppWrapper>
      <PopExit />
      <PopNewCard />
      <PopBrowse />
      <Header user={currentUser} />
      <Main columns={columns} cards={cards} isLoading={isLoading} />
    </AppWrapper>
  )
}

export default App
