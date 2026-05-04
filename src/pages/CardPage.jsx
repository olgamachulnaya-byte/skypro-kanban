import PopBrowse from '../components/PopBrowse/PopBrowse'
import { useParams } from '../lib/router'

function CardPage({ mode = 'view' }) {
  const { id } = useParams()

  return <PopBrowse forceOpen cardId={id} mode={mode} />
}

export default CardPage