import { Link } from '../lib/router'
import {
  NotFoundCard,
  NotFoundCode,
  NotFoundHint,
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
         <NotFoundTitle>Кажется, вы заблудились</NotFoundTitle>
        <NotFoundText>
          Такой страницы нет. Проверьте адрес в строке браузера или вернитесь на главную страницу.
        </NotFoundText>
        <NotFoundHint>Мы уже работаем над тем, чтобы такого больше не происходило.</NotFoundHint>
        <Link to="/">
          <PrimaryButton type="button">На главную</PrimaryButton>
        </Link>
      </NotFoundCard>
    </NotFoundRoot>
  )
}

export default NotFoundPage