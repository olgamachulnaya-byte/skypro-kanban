import { apiRequest } from './apiClient'

export const getTasks = () => apiRequest('', { auth: true })

export const getTaskById = (id) => apiRequest(`/${id}`, { auth: true })  

export const createTask = (payload) => apiRequest('', { method: 'POST', body: payload, auth: true })

export const updateTask = (id, payload) => apiRequest(`/${id}`, { method: 'PUT', body: payload, auth: true })

export const deleteTask = (id) => apiRequest(`/${id}`, { method: 'DELETE', auth: true })