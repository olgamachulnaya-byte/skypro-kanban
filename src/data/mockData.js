export const columns = [
  {
    title: 'Без статуса',
    cards: [
      { themeClass: '_orange', themeText: 'Web Design' },
      { themeClass: '_green', themeText: 'Research' },
      { themeClass: '_orange', themeText: 'Web Design' },
      { themeClass: '_purple', themeText: 'Copywriting' },
      { themeClass: '_orange', themeText: 'Web Design' },
    ],
  },
  {
    title: 'Нужно сделать',
    cards: [{ themeClass: '_green', themeText: 'Research' }],
  },
  {
    title: 'В работе',
    cards: [
      { themeClass: '_green', themeText: 'Research' },
      { themeClass: '_purple', themeText: 'Copywriting' },
      { themeClass: '_orange', themeText: 'Web Design' },
    ],
  },
  {
    title: 'Тестирование',
    cards: [{ themeClass: '_green', themeText: 'Research' }],
  },
  {
    title: 'Готово',
    cards: [{ themeClass: '_green', themeText: 'Research' }],
  },
]

export const categoryThemes = [
  { className: '_orange', text: 'Web Design', isActive: true },
  { className: '_green', text: 'Research' },
  { className: '_purple', text: 'Copywriting' },
]

export const browseStatusThemes = [
  { text: 'Без статуса', className: '_gray', textClassName: '_gray' },
  { text: 'Нужно сделать', className: '_gray', textClassName: '_gray' },
  { text: 'В работе', className: '_gray', textClassName: '_gray' },
  { text: 'Тестирование', className: '_gray', textClassName: '_gray' },
  { text: 'Готово', className: '_gray', textClassName: '_gray' },
]

export const calendarDayNames = [
  { text: 'пн' },
  { text: 'вт' },
  { text: 'ср' },
  { text: 'чт' },
  { text: 'пт' },
  { text: 'сб', isWeekend: true },
  { text: 'вс', isWeekend: true },
]

const baseCalendarCells = [
  { value: '28', className: '_other-month' },
  { value: '29', className: '_other-month' },
  { value: '30', className: '_other-month' },
  { value: '31', className: '_cell-day' },
  { value: '1', className: '_cell-day' },
  { value: '2', className: '_cell-day _weekend' },
  { value: '3', className: '_cell-day _weekend' },
  { value: '4', className: '_cell-day' },
  { value: '5', className: '_cell-day' },
  { value: '6', className: '_cell-day' },
  { value: '7', className: '_cell-day' },
  { value: '8', className: '_cell-day _current' },
  { value: '9', className: '_cell-day _weekend' },
  { value: '10', className: '_cell-day _weekend' },
  { value: '11', className: '_cell-day' },
  { value: '12', className: '_cell-day' },
  { value: '13', className: '_cell-day' },
  { value: '14', className: '_cell-day' },
  { value: '15', className: '_cell-day' },
  { value: '16', className: '_cell-day _weekend' },
  { value: '17', className: '_cell-day _weekend' },
  { value: '18', className: '_cell-day' },
  { value: '19', className: '_cell-day' },
  { value: '20', className: '_cell-day' },
  { value: '21', className: '_cell-day' },
  { value: '22', className: '_cell-day' },
  { value: '23', className: '_cell-day _weekend' },
  { value: '24', className: '_cell-day _weekend' },
  { value: '25', className: '_cell-day' },
  { value: '26', className: '_cell-day' },
  { value: '27', className: '_cell-day' },
  { value: '28', className: '_cell-day' },
  { value: '29', className: '_cell-day' },
  { value: '30', className: '_cell-day _weekend' },
  { value: '1', className: '_other-month _weekend' },
]

export const calendarVariants = {
  new: {
    inputId: 'datepick_value_new',
    value: '08.09.2023',
    periodText: 'Выберите срок исполнения ',
    periodValue: '',
    cells: baseCalendarCells,
  },
  browse: {
    inputId: 'datepick_value_browse',
    value: '08.09.2023',
    periodText: 'Срок исполнения: ',
    periodValue: '09.09.23',
    cells: baseCalendarCells.map((cell) => {
      if (cell.value === '9' && cell.className === '_cell-day _weekend') {
        return { ...cell, className: '_cell-day _weekend _active-day' }
      }

      return cell
    }),
  },
}

export const currentUser = {
  name: 'Ivan Ivanov',
  email: 'ivan.ivanov@gmail.com',
}
