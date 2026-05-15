import { useCallback, useMemo, useState } from 'react'
import AppRoutes from './components/AppRoutes/AppRoutes'
import { AuthContext } from './contexts/AuthContext'
import { TaskContext } from './contexts/TaskContext'
import { clearToken, getToken } from './services/apiClient'

function App() {
  const [isAuth, setIsAuth] = useState(Boolean(getToken()))
  const [user, setUser] = useState({ name: 'Пользователь' })
  const [tasks, setTasks] = useState([])

  const handleLogin = useCallback((profile) => {
    setIsAuth(true)
    setUser(profile)
  }, [])

  const handleExit = useCallback(() => {
    clearToken()
    setIsAuth(false)
    setUser({ name: 'Пользователь' })
    setTasks([])
  }, [])

  const addTask = useCallback((task) => {
    setTasks((prev) => [task, ...prev])
  }, [])

  const updateTaskInState = useCallback((taskId, updates) => {
    setTasks((prev) => prev.map((task) => (task.id === taskId ? { ...task, ...updates } : task)))
  }, [])

  const removeTask = useCallback((taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId))
  }, [])

  const authValue = useMemo(() => ({ isAuth, user, handleLogin, handleExit }), [isAuth, user, handleLogin, handleExit])

  const taskValue = useMemo(
    () => ({ tasks, setTasks, addTask, updateTask: updateTaskInState, removeTask }),
    [tasks, addTask, updateTaskInState, removeTask],
  )

  return (
    <AuthContext.Provider value={authValue}>
      <TaskContext.Provider value={taskValue}>
        <AppRoutes />
      </TaskContext.Provider>
    </AuthContext.Provider>
  ) 
}

export default App
