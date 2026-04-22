import {
  ExitNoButton,
  ExitYesButton,
  FormActions,
  PopExitBlock,
  PopExitContainer,
  PopExitRoot,
  Title,
} from './PopExit.styled'

function PopExit() {
  return (
    <PopExitRoot id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <div>
            <Title>Выйти из аккаунта?</Title>
          </div>
          <form id="formExit" action="#">
            <FormActions>
              <ExitYesButton id="exitYes">
                <a href="#">Да, выйти</a>
              </ExitYesButton>
              <ExitNoButton id="exitNo">
                <a href="#">Нет, остаться</a>
              </ExitNoButton>
            </FormActions>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitRoot>
  )
}

export default PopExit
