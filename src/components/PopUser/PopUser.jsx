import {
  CloseButton,
  Email,
  LogoutButton,
  Name,
  PopUserRoot,
  ThemeCheckbox,
  ThemeRow,
} from './PopUser.styled'

function PopUser({ user, isOpen, onClose }) {
  return (
     <PopUserRoot id="user-set-target" $isOpen={isOpen}>
      <CloseButton type="button" onClick={onClose} aria-label="Закрыть">
        ×
      </CloseButton>
      <Name>{user.name}</Name>
      <Email>{user.email}</Email>
      <ThemeRow>
        <p>Темная тема</p>
         <ThemeCheckbox type="checkbox" name="checkbox" />
      </ThemeRow>
      <LogoutButton type="button">
        <a href="#popExit">Выйти</a>
     </LogoutButton>
    </PopUserRoot>
  )
}

export default PopUser
