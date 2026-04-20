import { useState } from 'react'
import { Container } from '../../App.styled'
import PopUser from '../PopUser/PopUser'
import {
  HeaderBlock,
  HeaderRoot,
  LogoDark,
  LogoLight,
  Nav,
  NewTaskButton,
  UserLink,
} from './Header.styled'

function Header({ user }) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

  const handleUserClick = (event) => {
    event.preventDefault()
    setIsUserMenuOpen((prevState) => !prevState)
  }

  const handleCloseUserMenu = () => {
    setIsUserMenuOpen(false)
  }

  return (
    <HeaderRoot>
      <Container>
        <HeaderBlock>
          <LogoLight>
            <a href="#" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </LogoLight>

          <LogoDark>
            <a href="#" target="_self">
              <img src="/images/logo_dark.png" alt="logo" />
            </a>
          </LogoDark>

           <Nav>
            <NewTaskButton id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </NewTaskButton>
            <UserLink href="#" onClick={handleUserClick}>
              {user.name}
            </UserLink>
            <PopUser user={user} isOpen={isUserMenuOpen} onClose={handleCloseUserMenu} />
         </Nav>
        </HeaderBlock>
      </Container>
    </HeaderRoot>
  )
}

export default Header
