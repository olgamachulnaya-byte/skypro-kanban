import { apiRequest } from './apiClient'

export const getTasks = () => apiRequest('/tasks', { auth: true })
export const getTaskById = (id) => apiRequest(`/tasks/${id}`, { auth: true })
export const createTask = (payload) => apiRequest('/tasks', { method: 'POST', body: payload, auth: true })
export const updateTask = (id, payload) => apiRequest(`/tasks/${id}`, { method: 'PUT', body: payload, auth: true })
export const deleteTask = (id) => apiRequest(`/tasks/${id}`, { method: 'DELETE', auth: true })