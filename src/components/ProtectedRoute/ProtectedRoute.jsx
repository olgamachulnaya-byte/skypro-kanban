import { Navigate } from '../../lib/router'

function ProtectedRoute({ isAuth, children }) {
  if (!isAuth) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute