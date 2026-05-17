import { useEffect, useState } from 'react'
import Calendar from '../Calendar/Calendar'
import { browseStatusThemes, categoryThemes } from '../../data/mockData'
import { Link, useNavigate } from '../../lib/router'
import { deleteTask, getTaskById, updateTask } from '../../services/tasksApi'
import { useTask } from '../../contexts/TaskContext'

function PopBrowse({ forceOpen = false, cardId, mode = 'view' }) {
  const isEditMode = mode === 'edit'
  const navigate = useNavigate()
  const { removeTask, updateTask: updateTaskInState } = useTask()
  const [task, setTask] = useState(null)
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('Без статуса')
  const [date, setDate] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const loadTask = async () => {
      setError('')
      setIsLoading(true)
      try {
        const data = await getTaskById(cardId)
        const nextTask = data?.task || null
        setTask(nextTask)
        setDescription(nextTask?.description || '')
        setStatus(nextTask?.status || 'Без статуса')
        setDate(nextTask?.date || '')
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    loadTask()
  }, [cardId])

  useEffect(() => {
    if (!task || isEditMode) return
    setDescription(task.description || '')
    setStatus(task.status || 'Без статуса')
    setDate(task.date || '')
  }, [isEditMode, task])

  const handleDelete = async () => {
    setError('')
    setIsSubmitting(true)
    try {
      await deleteTask(cardId)
      removeTask(cardId)
      navigate('/', { replace: true })
    } catch (err) {
      setError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSave = async () => {
    if (!task) return
    setError('')
   const trimmedDescription = description.trim()

    if (!trimmedDescription) {
      setError('Описание задачи не может быть пустым.')
      return
    }


    setIsSubmitting(true)
    try {
      const data = await updateTask(cardId, {
        title: task.title,
        topic: task.topic,
        status,
        description: trimmedDescription,
        date,
      })
      const updatedTask = data?.task || data
      updateTaskInState(cardId, {
        title: updatedTask?.title || task.title,
        topic: updatedTask?.topic || task.topic,
        status: updatedTask?.status || status,
        date: updatedTask?.date || date,
      })
     setDescription(updatedTask?.description || trimmedDescription)
     setTask((prev) => (prev ? { ...prev, date: updatedTask?.date || date, description: updatedTask?.description || trimmedDescription } : prev))
      navigate(`/card/${cardId}`, { replace: true })
    } catch (err) {
      setError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const taskTopicClass = categoryThemes.find((item) => item.text === task?.topic)?.className || '_orange'

  return (
    <div className="pop-browse" id="popBrowse" style={forceOpen ? { display: 'block' } : undefined}>
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
           {isLoading ? <p>Загрузка задачи...</p> : null}
            {error ? <p style={{ color: '#ff4d4f' }}>{error}</p> : null}
            {task ? (
              <>
                <div className="pop-browse__top-block">
                  <h3 className="pop-browse__ttl">{task.title}</h3>
                  <div className={`categories__theme theme-top ${taskTopicClass} _active-category`}>
                    <p className={taskTopicClass}>{task.topic}</p> 
                  </div>
               
                </div>
              
                  <div className="pop-browse__status status">
                  <p className="status__p subttl">Статус</p>
                  <div className="status__themes">
                    {browseStatusThemes.map(({ text }) => (
                      <button
                        key={text}
                        type="button"
                        className={`status__theme${status === text ? ' _active-category' : ''}`}
                        onClick={() => isEditMode && setStatus(text)}
                        disabled={!isEditMode}
                      >
                       <p>{text}</p>
                      </button>
                    ))}
                  </div>
                </div>

             <div className="pop-browse__wrap">
                  <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">
                    <div className="form-browse__block">
                      <label htmlFor="textArea01" className="subttl">
                        Описание задачи
                      </label>
                      <textarea
                        className="form-browse__area"
                        name="text"
                        id="textArea01"
                        readOnly={!isEditMode}
                        placeholder="Введите описание задачи..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                  </form>

                <div className="pop-new-card__calendar">
                     <Calendar variant="browse" selectedDate={date} onDateSelect={isEditMode ? setDate : undefined} />
                  </div>
                </div>
                
               <div className="theme-down__categories theme-down">
                  <p className="categories__p subttl">Категория</p>
                  <div className={`categories__theme ${taskTopicClass} _active-category`}>
                    <p className={taskTopicClass}>{task.topic}</p>
                  </div>
                </div>
                
               {!isEditMode ? (
                  <div className="pop-browse__btn-browse">
                    <div className="btn-group">
                      <button className="btn-browse__edit _btn-bor _hover03" type="button">
                        <Link to={`/card/${cardId}/edit`}>Редактировать задачу</Link>
                      </button>
                      <button className="btn-browse__delete _btn-bor _hover03" type="button" onClick={handleDelete} disabled={isSubmitting}>
                        Удалить задачу
                      </button>
                    </div>
                    <button className="btn-browse__close _btn-bg _hover01" type="button">
                      <Link to="/">Закрыть</Link>
                    </button>
                  </div>
                ) : (
                  <div className="pop-browse__btn-edit">
                    <div className="btn-group">
                      <button className="btn-edit__edit _btn-bg _hover01" type="button" onClick={handleSave} disabled={isSubmitting}>
                        Сохранить
                      </button>
                      <button className="btn-edit__edit _btn-bor _hover03" type="button" onClick={() => { setDescription(task?.description || ''); setStatus(task?.status || 'Без статуса'); setDate(task?.date || '') }}>
                        <Link to={`/card/${cardId}`}>Отменить</Link>
                      </button>
                      <button className="btn-edit__delete _btn-bor _hover03" id="btnDelete" type="button" onClick={handleDelete} disabled={isSubmitting}>
                        Удалить задачу
                      </button>
                    </div>
                    <button className="btn-edit__close _btn-bg _hover01" type="button">
                      <Link to="/">Закрыть</Link>
                    </button>
                  </div>
                )}
              </>
            ) : null}  
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopBrowse
