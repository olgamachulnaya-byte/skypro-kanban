import { apiRequest } from './apiClient'

export const getTasks = () => apiRequest('/tasks', { auth: true })
