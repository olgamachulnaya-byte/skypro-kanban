import { apiRequest } from './apiClient'

export const registerUser = (payload) => apiRequest('/user', { method: 'POST', body: payload })
export const loginUser = (payload) => apiRequest('/user/login', { method: 'POST', body: payload })