import { useCallback, useEffect, useState } from 'react'
import { AppWrapper } from '../App.styled'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import { columns } from '../data/mockData'
import { Outlet } from '../lib/router'
import { getTasks } from '../services/tasksApi'

function BoardPage({ user }) {
  const [isLoading, setIsLoading] = useState(true)
  const [cards, setCards] = useState([])
  const [error, setError] = useState('')
  const formatTaskDate = (value) => {
    if (!value) return 'Без даты'
    const date = new Date(value)
    if (Number.isNaN(date.getTime())) return value
    return new Intl.DateTimeFormat('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    }).format(date)
  }

  const loadTasks = useCallback(async () => {
    setError('')
    setIsLoading(true)
    try {
      const data = await getTasks()
      const tasks = Array.isArray(data?.tasks) ? data.tasks : Array.isArray(data) ? data : []
      setCards(tasks.map((task) => ({
        id: task._id || task.id,
        topic: task.topic || 'Web Design',
        title: task.title || 'Без названия',
        date: formatTaskDate(task.date),
        status: task.status || 'Без статуса',
      })))
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
      }, [])

  useEffect(() => {
    loadTasks()

      window.addEventListener('tasks:changed', loadTasks)
    return () => window.removeEventListener('tasks:changed', loadTasks)
    }, [loadTasks])

  return (
    <AppWrapper>
      <Header user={user} />
      <Main columns={columns} cards={cards} isLoading={isLoading} error={error} />
      <Outlet />
    </AppWrapper>
  )
}
export default BoardPage