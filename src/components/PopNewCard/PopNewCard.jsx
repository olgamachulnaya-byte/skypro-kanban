import { useState } from 'react'
import Calendar from '../Calendar/Calendar'
import { categoryThemes } from '../../data/mockData'
import { Link, useNavigate } from '../../lib/router'
import { createTask } from '../../services/tasksApi'

function PopNewCard({ forceOpen = false }) {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [topic, setTopic] = useState(categoryThemes[0].text)
  const [date, setDate] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    if (!title.trim()) {
      setError('Введите название задачи.')
      return
    }

    setIsSubmitting(true)
    try {
      await createTask({
        title: title.trim(),
        description: description.trim(),
        topic,
        status: 'Без статуса',
        date: date || new Date().toISOString().slice(0, 10),
      })
      window.dispatchEvent(new Event('tasks:changed'))
      navigate('/', { replace: true })
    } catch (err) {
      setError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pop-new-card" id="popNewCard" style={forceOpen ? { display: 'block' } : undefined}>
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to="/" className="pop-new-card__close">
              &#10006;
            </Link>

            <div className="pop-new-card__wrap">
              <form className="pop-new-card__form form-new" id="formNewCard" onSubmit={handleSubmit}>
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

              </form>

              <div className="pop-new-card__calendar">
                 <Calendar variant="new" selectedDate={date} onDateSelect={setDate} />
              </div>
            </div>

            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                {categoryThemes.map(({ className, text }) => (
                  <button
                    key={text}
                    type="button"
                    className={`categories__theme ${className}${topic === text ? ' _active-category' : ''}`}
                    onClick={() => setTopic(text)}
                  >
                    <p className={className}>{text}</p>
                  </button>
                ))}
              </div>
            </div>

            <button className="form-new__create _hover01" id="btnCreate" form="formNewCard" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Создание...' : 'Создать задачу'}
            </button>

            {error ? <p style={{ color: '#ff4d4f' }}>{error}</p> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopNewCard
