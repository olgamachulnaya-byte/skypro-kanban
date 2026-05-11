import { apiRequest } from './apiClient'

const toFormData = (payload) => {
  const formData = new FormData()

  Object.entries(payload).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      formData.append(key, value)
    }
  })

  return formData
}

export const getTasks = () => apiRequest('', { auth: true })

export const getTaskById = (id) => apiRequest(`/${id}`, { auth: true })  

export const createTask = (payload) => apiRequest('', { method: 'POST', body: toFormData(payload), auth: true })

export const updateTask = (id, payload) => apiRequest(`/${id}`, { method: 'PUT', body: toFormData(payload), auth: true })

export const deleteTask = (id) => apiRequest(`/${id}`, { method: 'DELETE', auth: true })