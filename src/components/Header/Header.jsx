import { useState } from 'react'
import { Container } from '../../App.styled'
import { Link } from '../../lib/router'
import PopUser from '../PopUser/PopUser'
import {
  HeaderBlock,
  HeaderRoot,
  Logo,
  Nav,
  NewTaskButton,
  UserLink,
} from './Header.styled'
import { useAppTheme } from '../../contexts/ThemeContext'

function Header({ user }) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const { isDark } = useAppTheme()

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
          <Logo>
            <Link to="/">
              <img src={isDark ? "/images/logo_dark.png" : "/images/logo.png"} alt="logo" />
            </Link>
          </Logo>

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
