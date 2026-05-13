import { useMemo, useState } from 'react'
import { calendarDayNames } from '../../data/mockData'

function Calendar({ onDateSelect, selectedDate, variant = 'new' }) {
  const [currentDate, setCurrentDate] = useState(() => {
    if (selectedDate) {
      const parsed = new Date(selectedDate)
      if (!Number.isNaN(parsed.getTime())) return parsed
    }
    return new Date()
  })

  const selected = useMemo(() => {
    if (!selectedDate) return null
    const parsed = new Date(selectedDate)
    return Number.isNaN(parsed.getTime()) ? null : parsed
  }, [selectedDate])

  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()
  const monthLabel = new Intl.DateTimeFormat('ru-RU', { month: 'long', year: 'numeric' }).format(currentDate)
  const monthTitle = monthLabel.charAt(0).toUpperCase() + monthLabel.slice(1)
  const firstDayOffset = (new Date(year, month, 1).getDay() + 6) % 7
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const cells = Array.from({ length: 35 }, (_, index) => {
    const dayNumber = index - firstDayOffset + 1
    if (dayNumber < 1 || dayNumber > daysInMonth) return null
    const cellDate = new Date(year, month, dayNumber)
    const isSelected = selected && cellDate.toDateString() === selected.toDateString()
    const isToday = cellDate.toDateString() === new Date().toDateString()
    return { dayNumber, cellDate, isSelected, isToday }
  })

  const periodValue = selected
    ? ` ${new Intl.DateTimeFormat('ru-RU').format(selected)}`
    : ''

  return (
    <div className="calendar">
      <p className="calendar__ttl subttl">Даты</p>
      <div className="calendar__block">
        <div className="calendar__nav">
          <div className="calendar__month">{monthTitle}</div>
          <div className="nav__actions">
             <button className="nav__action" type="button" onClick={() => setCurrentDate(new Date(year, month - 1, 1))}>
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none">
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </button>
            <button className="nav__action" type="button" onClick={() => setCurrentDate(new Date(year, month + 1, 1))}>
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none">
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="calendar__content">
          <div className="calendar__days-names">
            {calendarDayNames.map(({ text, isWeekend }) => (
              <div key={text} className={`calendar__day-name${isWeekend ? ' -weekend-' : ''}`}>
                {text}
              </div>
            ))}
          </div>

          <div className="calendar__cells">
             {cells.map((cell, index) => (
              <button
                key={index}
                type="button"
                className={`calendar__cell ${cell ? '_cell-day' : '_other-month'}${cell?.isSelected ? ' _active-day' : ''}${cell?.isToday ? ' _current' : ''}`}
                onClick={() => cell && onDateSelect?.(cell.cellDate.toISOString().slice(0, 10))}
              >
                {cell ? cell.dayNumber : ''}
              </button>
            ))}
          </div>
        </div>

        <div className="calendar__period">
          <p className="calendar__p date-end">
             Срок исполнения
            <span className="date-control">{periodValue}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Calendar
