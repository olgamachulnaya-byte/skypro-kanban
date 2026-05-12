const AUTH_BASE_URL = import.meta.env.VITE_AUTH_API_URL ?? 'https://wedev-api.sky.pro/api/user'

const getAuthErrorMessage = (status) => {
  if (status === 400) return 'Некорректные данные запроса.'
  if (status === 401) return 'Неверный логин или пароль.'
  if (status >= 500) return 'Ошибка сервера. Попробуйте позже.'
  return 'Не удалось выполнить запрос авторизации.'
}

async function authRequest(path = '', payload) {
  let response

  try {
    response = await fetch(`${AUTH_BASE_URL}${path}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
    })
  } catch {
    throw new Error('Ошибка сети. Проверьте подключение к интернету.')
  }

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(data?.error || data?.message || getAuthErrorMessage(response.status))
  }

  return data
}

export const registerUser = (payload) => authRequest('', payload)
export const loginUser = (payload) => authRequest('/login', payload)