const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'https://wedev-api.sky.pro/api/kanban'

export const getToken = () => localStorage.getItem('kanban_token')
export const setToken = (token) => localStorage.setItem('kanban_token', token)
export const clearToken = () => localStorage.removeItem('kanban_token')

const getErrorMessage = (status, fallback = 'Произошла ошибка при запросе.') => {
  if (status === 400) return 'Некорректные данные запроса.'
  if (status === 401) return 'Неверный логин или пароль.'
  if (status === 403) return 'Нет доступа к этому ресурсу.'
  if (status === 404) return 'Ресурс не найден.'
  if (status >= 500) return 'Ошибка сервера. Попробуйте позже.'
  return fallback
}

export async function apiRequest(path, { method = 'GET', body, auth = false } = {}) {
  const headers = { 'Content-Type': 'application/json' }
  if (auth) {
    const token = getToken()
    if (token) headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })

  const data = await response.json().catch(() => null)
  if (!response.ok) {
    throw new Error(data?.error || data?.message || getErrorMessage(response.status))
  }

  return data
}