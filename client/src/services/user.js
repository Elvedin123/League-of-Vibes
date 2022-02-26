import { backendUrl } from "./backendApi"


export const loginUser = async (loginData) => {
  const res = await backendUrl.post('/auth/login', { authentication: loginData })
  localStorage.setItem('authToken', res.data.token)
  backendUrl.defaults.headers.common.authorization = `Bearer ${res.data.token}`
  return res.data.user
}
export const signupUser = async (signupData) => {
  const res = await backendUrl.post('/users', { user: signupData })
  localStorage.setItem('authToken', res.data.token)
  backendUrl.defaults.headers.common.authorization = `Bearer ${res.data.token}`
  return res.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken')
  if (token) {
    backendUrl.defaults.headers.common.authorization = `Bearer ${token}`
    const res = await backendUrl.get('/auth/verify')
    return res.data
  }
}

export const getAllUsers = async () => {
  const res = await backendUrl.get('users')
  return res.data
}

export const getOneUser = async (user_id) => {
  const res = await backendUrl.get(`/users/${user_id}
  `)
  return res.data
}

export const updateUser = async (user_id, updateData) => {
  const res = await backendUrl.put(`/users/${user_id}`, { user: updateData })
  return res.data
}

export const deleteUser = async (user_id) => {
  const res = await backendUrl.delete(`/users/${user_id}`)
  return res.data
}