import { useEffect, useState } from 'react'
import { AppWrapper } from '../App.styled'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import { columns } from '../data/mockData'
import { Outlet, useLocation } from '../lib/router'
import { getTasks } from '../services/tasksApi'

function BoardPage({ user }) {
  const [isLoading, setIsLoading] = useState(true)
  const [cards, setCards] = useState([])
  const [error, setError] = useState('')
  const { pathname } = useLocation()

  useEffect(() => {
     const loadTasks = async () => {
      setError('')
      setIsLoading(true)
      try {
        const data = await getTasks()
        const tasks = Array.isArray(data?.tasks) ? data.tasks : Array.isArray(data) ? data : []
        setCards(tasks.map((task) => ({
          id: task._id || task.id,
          topic: task.topic || 'Web Design',
          title: task.title || 'Без названия',
          date: task.date || 'Без даты',
          status: task.status || 'Без статуса',
        })))
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    loadTasks()
    }, [pathname])

  return (
    <AppWrapper>
      <Header user={user} />
      <Main columns={columns} cards={cards} isLoading={isLoading} error={error} />
      <Outlet />
    </AppWrapper>
  )
}
export default BoardPage