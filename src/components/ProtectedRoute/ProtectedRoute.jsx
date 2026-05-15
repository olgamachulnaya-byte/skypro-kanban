import { useAuth } from '../../contexts/AuthContext'
import { Navigate } from '../../lib/router'

function ProtectedRoute({ children }) {
  const { isAuth } = useAuth()
  if (!isAuth) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute