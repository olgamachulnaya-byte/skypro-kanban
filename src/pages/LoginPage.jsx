import { useState } from 'react'
import { Link, Navigate } from '../lib/router'
import {
  AuthCard,
  AuthFooter,
  AuthForm,
  AuthInput,
  AuthPageRoot,
  AuthTitle,
  Logo,
  PrimaryButton,
} from './pages.styled'
import { loginUser } from '../services/authApi'
import { setToken } from '../services/apiClient'

function LoginPage({ isAuth, onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (isAuth) return <Navigate to="/" replace />

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)
    try {
      const data = await loginUser({ login: email, password })
      if (!data?.user?.token) throw new Error('Сервер не вернул токен авторизации.')
      setToken(data.user.token)
      onLogin({ name: data.user.name || email })
      alert('Вход выполнен успешно.')
    } catch (err) {
      setError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (<AuthPageRoot><AuthCard><Logo src="/images/logo_dark.png" alt="Kanban" /><AuthTitle>Вход</AuthTitle>
    <AuthForm onSubmit={handleSubmit}>
      <AuthInput type="email" placeholder="Эл. почта" value={email} onChange={(e)=>setEmail(e.target.value)} required />
      <AuthInput type="password" placeholder="Пароль" value={password} onChange={(e)=>setPassword(e.target.value)} required minLength={3} />
      <PrimaryButton type="submit" disabled={isSubmitting}>{isSubmitting ? 'Входим...' : 'Войти'}</PrimaryButton>
    </AuthForm>
    {error && <AuthFooter style={{ color: '#ff4d4f' }}>{error}</AuthFooter>}
    <AuthFooter>Нужно зарегистрироваться? <Link to="/register">Регистрируйтесь здесь</Link></AuthFooter>
  </AuthCard></AuthPageRoot>)
}

export default LoginPage