import { useCallback, useMemo, useState } from 'react'
import { AuthContext } from './AuthContext'
import { clearToken, getToken } from '../services/apiClient'

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(Boolean(getToken()))
  const [user, setUser] = useState({ name: 'Пользователь' })

  const handleLogin = useCallback((profile) => {
    setIsAuth(true)
    setUser(profile)
  }, [])

  const handleExit = useCallback(() => {
    clearToken()
    setIsAuth(false)
    setUser({ name: 'Пользователь' })
  }, [])

  const authValue = useMemo(() => ({ isAuth, user, handleLogin, handleExit }), [isAuth, user, handleLogin, handleExit])

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
}

export default AuthProvider