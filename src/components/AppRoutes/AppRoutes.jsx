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
      >
        <Route path="card/new" element={<AddTaskPage />} />
        <Route path="card/:id" element={<CardPage mode="view" />} />
        <Route path="card/:id/edit" element={<CardPage mode="edit" />} />
        <Route path="exit" element={<ExitPage onExit={() => setIsAuth(false)} />} />
      </Route>
      <Route path="/login" element={<LoginPage isAuth={isAuth} onLogin={() => setIsAuth(true)} />} />
      <Route
        path="/register"
        element={<RegisterPage isAuth={isAuth} onRegister={() => setIsAuth(true)} />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes