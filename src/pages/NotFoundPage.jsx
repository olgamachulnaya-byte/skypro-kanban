import { Link } from '../lib/router'
import {
  NotFoundActions,
  NotFoundCard,
  NotFoundCode,
  NotFoundHint,
  NotFoundRoot,
  NotFoundText,
  NotFoundTitle,
  PrimaryButton,
  SecondaryButton,
} from './pages.styled'

function NotFoundPage() {
  return (
    <NotFoundRoot>
      <NotFoundCard>
        <NotFoundCode>404</NotFoundCode>
        <NotFoundTitle>Страница не найдена</NotFoundTitle>
        <NotFoundText>
          Похоже, вы перешли по неправильной ссылке или ошиблись в адресе.
        </NotFoundText>
        <NotFoundHint>
          Вернитесь на главную и продолжите работу с доской задач.
        </NotFoundHint>
        <NotFoundActions>
          <Link to="/">
            <PrimaryButton type="button">На главную</PrimaryButton>
          </Link>
          <SecondaryButton type="button" onClick={() => window.history.back()}>
            Назад
          </SecondaryButton>
        </NotFoundActions>
      </NotFoundCard>
    </NotFoundRoot>
  )
}

export default NotFoundPage