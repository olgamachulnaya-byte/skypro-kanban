import { useState } from 'react'
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

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <BoardPage />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<LoginPage isAuth={isAuth} onLogin={() => setIsAuth(true)} />} />
      <Route
        path="/register"
        element={<RegisterPage isAuth={isAuth} onRegister={() => setIsAuth(true)} />}
      />
      <Route
        path="/card/new"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <AddTaskPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/card/:id"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <CardPage mode="view" />
          </ProtectedRoute>
        }
      />
      <Route
        path="/card/:id/edit"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <CardPage mode="edit" />
          </ProtectedRoute>
        }
      />
      <Route
        path="/exit"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <ExitPage onExit={() => setIsAuth(false)} />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes