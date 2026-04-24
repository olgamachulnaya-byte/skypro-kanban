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

function LoginPage({ isAuth, onLogin }) {
  if (isAuth) {
    return <Navigate to="/" replace />
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onLogin()
  }

  return (
    <AuthPageRoot>
      <AuthCard>
        <Logo src="/images/logo_dark.png" alt="Kanban" />
        <AuthTitle>Вход</AuthTitle>
        <AuthForm onSubmit={handleSubmit}>
          <AuthInput type="email" placeholder="Эл. почта" required />
          <AuthInput type="password" placeholder="Пароль" required />
          <PrimaryButton type="submit">Войти</PrimaryButton>
        </AuthForm>
        <AuthFooter>
          Нужно зарегистрироваться? <Link to="/register">Регистрируйтесь здесь</Link>
        </AuthFooter>
      </AuthCard>
    </AuthPageRoot>
  )
}

export default LoginPage