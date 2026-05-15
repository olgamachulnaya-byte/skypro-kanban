import { useCallback, useMemo, useState } from 'react'
import '../../App.css'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import { Route, Routes } from '../../lib/router'
import AddTaskPage from '../../pages/AddTaskPage'
import BoardPage from '../../pages/BoardPage'
import CardPage from '../../pages/CardPage'
import ExitPage from '../../pages/ExitPage'
import LoginPage from '../../pages/LoginPage'
import NotFoundPage from '../../pages/NotFoundPage'
import RegisterPage from '../../pages/RegisterPage'
import { clearToken, getToken } from '../../services/apiClient'
import { AuthContext } from '../../contexts/AuthContext'
import { TaskContext } from '../../contexts/TaskContext'

function AppRoutes() {
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
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <BoardPage />
              </ProtectedRoute>
            }
          >
            <Route path="card/new" element={<AddTaskPage />} />
            <Route path="card/:id" element={<CardPage mode="view" />} />
            <Route path="card/:id/edit" element={<CardPage mode="edit" />} />
            <Route path="exit" element={<ExitPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </TaskContext.Provider>
    </AuthContext.Provider>
  )
}

export default AppRoutes