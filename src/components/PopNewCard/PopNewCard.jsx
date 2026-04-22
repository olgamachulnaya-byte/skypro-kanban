import Calendar from '../Calendar/Calendar'
import { categoryThemes } from '../../data/mockData'
import { Link } from '../../lib/router'

function PopNewCard({ forceOpen = false }) {
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
              <form className="pop-new-card__form form-new" id="formNewCard" action="#">
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
                  ></textarea>
                </div>
              </form>

              <div className="pop-new-card__calendar">
                <Calendar variant="new" />
              </div>
            </div>

            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                {categoryThemes.map(({ className, text, isActive }) => (
                  <div
                    key={text}
                    className={`categories__theme ${className}${isActive ? ' _active-category' : ''}`}
                  >
                    <p className={className}>{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <button className="form-new__create _hover01" id="btnCreate">
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopNewCard
