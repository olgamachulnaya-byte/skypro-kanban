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
  
  return (
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
  )
}

export default AppRoutes