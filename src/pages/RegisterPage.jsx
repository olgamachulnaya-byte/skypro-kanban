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

function RegisterPage({ isAuth, onRegister }) {
  if (isAuth) {
    return <Navigate to="/" replace />
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onRegister()
  }

  return (
    <AuthPageRoot>
      <AuthCard>
        <Logo src="/images/logo_dark.png" alt="Kanban" />
        <AuthTitle>Регистрация</AuthTitle>
        <AuthForm onSubmit={handleSubmit}>
          <AuthInput type="text" placeholder="Имя" required />
          <AuthInput type="email" placeholder="Эл. почта" required />
          <AuthInput type="password" placeholder="Пароль" required />
          <PrimaryButton type="submit">Зарегистрироваться</PrimaryButton>
        </AuthForm>
        <AuthFooter>
          Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
        </AuthFooter>
      </AuthCard>
    </AuthPageRoot>
  )
}

export default RegisterPage