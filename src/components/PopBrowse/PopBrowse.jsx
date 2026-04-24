import Calendar from '../Calendar/Calendar'
import { browseStatusThemes } from '../../data/mockData'
import { Link } from '../../lib/router'

function PopBrowse({ forceOpen = false, cardId, mode = 'view' }) {
  const isEditMode = mode === 'edit'

  return (
    <div className="pop-browse" id="popBrowse" style={forceOpen ? { display: 'block' } : undefined}>
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">Задача #{cardId}</h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>

            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                {browseStatusThemes.map(({ text, className, textClassName }) => (
                  <div key={text} className={`status__theme ${className}`}>
                    <p className={textClassName}>{text}</p>
                  </div>
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
                  ></textarea>
                </div>
              </form>

              <div className="pop-new-card__calendar">
                <Calendar variant="browse" />
              </div>
            </div>

            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>

             {!isEditMode ? (
              <div className="pop-browse__btn-browse">
                <div className="btn-group">
                  <button className="btn-browse__edit _btn-bor _hover03" type="button">
                    <Link to={`/card/${cardId}/edit`}>Редактировать задачу</Link>
                  </button>
                  <button className="btn-browse__delete _btn-bor _hover03" type="button">
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
                  <button className="btn-edit__edit _btn-bg _hover01" type="button">
                    Сохранить
                  </button>
                  <button className="btn-edit__edit _btn-bor _hover03" type="button">
                    <Link to={`/card/${cardId}`}>Отменить</Link>
                  </button>
                  <button className="btn-edit__delete _btn-bor _hover03" id="btnDelete" type="button">
                    Удалить задачу
                  </button>
                </div>
                <button className="btn-edit__close _btn-bg _hover01" type="button">
                  <Link to="/">Закрыть</Link>
                </button>
              </div>
               )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopBrowse
