import { Link } from '../lib/router'
import {
  NotFoundCard,
  NotFoundCode,
  NotFoundRoot,
  NotFoundText,
  NotFoundTitle,
  PrimaryButton,
} from './pages.styled'

function NotFoundPage() {
  return (
    <NotFoundRoot>
      <NotFoundCard>
        <NotFoundCode>404</NotFoundCode>
        <NotFoundTitle>Страница не найдена</NotFoundTitle>
        <NotFoundText>Возможно, страница была удалена или указан неправильный адрес.</NotFoundText>
        <Link to="/">
          <PrimaryButton type="button">Вернуться на главную</PrimaryButton>
        </Link>
      </NotFoundCard>
    </NotFoundRoot>
  )
}

export default NotFoundPage