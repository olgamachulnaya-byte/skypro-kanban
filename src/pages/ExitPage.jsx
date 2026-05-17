import PopExit from '../components/PopExit/PopExit'
import { useAuth } from '../contexts/AuthContext'

function ExitPage() {
  const { handleExit } = useAuth()

  return <PopExit onExit={handleExit} />
}

export default ExitPage