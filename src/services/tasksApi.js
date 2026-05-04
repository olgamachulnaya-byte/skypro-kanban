import { apiRequest } from './apiClient'

const withFallback = async (requests) => {
  let lastError = null

  for (const request of requests) {
    try {
      return await request()
    } catch (error) {
      lastError = error
    }
  }

  throw lastError || new Error('Не удалось выполнить запрос к API.')
}

export const getTasks = () => apiRequest('/tasks', { auth: true })

export const getTaskById = (id) =>
  withFallback([
    () => apiRequest(`/tasks/${id}`, { auth: true }),
    () => apiRequest(`/task/${id}`, { auth: true }),
  ])

export const createTask = (payload) => apiRequest('/tasks', { method: 'POST', body: payload, auth: true })

export const updateTask = (id, payload) =>
  withFallback([
    () => apiRequest(`/tasks/${id}`, { method: 'PUT', body: payload, auth: true }),
    () => apiRequest(`/task/${id}`, { method: 'PUT', body: payload, auth: true }),
  ])

export const deleteTask = (id) =>
  withFallback([
    () => apiRequest(`/tasks/${id}`, { method: 'DELETE', auth: true }),
    () => apiRequest(`/task/${id}`, { method: 'DELETE', auth: true }),
  ])