import { useState } from 'react'
import { Container } from '../../App.styled'
import { Link } from '../../lib/router'
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
            <Link to="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </LogoLight>

          <LogoDark>
            <Link to="/">
              <img src="/images/logo_dark.png" alt="logo" />
            </Link>
          </LogoDark>

          <Nav>
            <NewTaskButton id="btnMainNew">
              <Link to="/card/new">Создать новую задачу</Link>
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
