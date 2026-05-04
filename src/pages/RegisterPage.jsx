import { useState } from 'react'
import { Link, Navigate } from '../lib/router'
import { AuthCard, AuthFooter, AuthForm, AuthInput, AuthPageRoot, AuthTitle, Logo, PrimaryButton } from './pages.styled'
import { registerUser } from '../services/authApi'
import { setToken } from '../services/apiClient'

function RegisterPage({ isAuth, onRegister }) {
   const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (isAuth) return <Navigate to="/" replace />

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    if (name.trim().length < 2) return setError('Имя должно содержать минимум 2 символа.')
    setIsSubmitting(true)
    try {
      const data = await registerUser({ name, login: email, password })
      if (!data?.user?.token) throw new Error('Регистрация прошла, но токен не получен.')
      setToken(data.user.token)
      onRegister({ name: data.user.name || name })
      alert('Регистрация прошла успешно.')
    } catch (err) {
      setError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (<AuthPageRoot><AuthCard><Logo src="/images/logo_dark.png" alt="Kanban" /><AuthTitle>Регистрация</AuthTitle>
    <AuthForm onSubmit={handleSubmit}>
      <AuthInput type="text" placeholder="Имя" value={name} onChange={(e)=>setName(e.target.value)} required minLength={2} />
      <AuthInput type="email" placeholder="Эл. почта" value={email} onChange={(e)=>setEmail(e.target.value)} required />
      <AuthInput type="password" placeholder="Пароль" value={password} onChange={(e)=>setPassword(e.target.value)} required minLength={3} />
      <PrimaryButton type="submit" disabled={isSubmitting}>{isSubmitting ? 'Создаём...' : 'Зарегистрироваться'}</PrimaryButton>
    </AuthForm>
    {error && <AuthFooter style={{ color: '#ff4d4f' }}>{error}</AuthFooter>}
    <AuthFooter>Уже есть аккаунт? <Link to="/login">Войдите здесь</Link></AuthFooter>
  </AuthCard></AuthPageRoot>)
}

export default RegisterPage