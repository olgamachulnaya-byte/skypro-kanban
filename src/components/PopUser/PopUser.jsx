import { Link } from '../../lib/router'
import {
  CloseButton,
  Email,
  LogoutButton,
  Name,
  PopUserRoot,
  ThemeCheckbox,
  ThemeRow,
} from './PopUser.styled'
import { useAppTheme } from '../../contexts/ThemeContext'

function PopUser({ user, isOpen, onClose }) {
const { isDark, toggleTheme } = useAppTheme()

  return (
    <PopUserRoot id="user-set-target" $isOpen={isOpen}>
      <CloseButton type="button" onClick={onClose} aria-label="Закрыть">
        ×
      </CloseButton>
      <Name>{user.name}</Name>
      <Email>{user.email}</Email>
      <ThemeRow>
        <p>Темная тема</p>
        <ThemeCheckbox type="checkbox" name="checkbox" checked={isDark} onChange={toggleTheme} />
      </ThemeRow>
      <LogoutButton type="button">
       <Link to="/exit">Выйти</Link>
      </LogoutButton>
    </PopUserRoot>
  )
}

export default PopUser
