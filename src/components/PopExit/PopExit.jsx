
import { Link, useNavigate } from '../../lib/router'
import {
  ExitNoButton,
  ExitYesButton,
  FormActions,
  PopExitBlock,
  PopExitContainer,
  PopExitRoot,
  Title,
} from './PopExit.styled'

function PopExit({ onExit }) {
  const navigate = useNavigate()

  const handleExit = () => {
    onExit?.()
    navigate('/login', { replace: true })
  }
  return (
     <PopExitRoot id="popExit" $forceOpen>
      <PopExitContainer>
        <PopExitBlock>
          <div>
            <Title>Выйти из аккаунта?</Title>
          </div>
          <form id="formExit" action="#">
            <FormActions>
              <ExitYesButton id="exitYes" type="button" onClick={handleExit}>
                Да, выйти
              </ExitYesButton>
              <ExitNoButton id="exitNo" type="button">
                <Link to="/">Нет, остаться</Link>
              </ExitNoButton>
            </FormActions>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitRoot>
  )
}

export default PopExit
