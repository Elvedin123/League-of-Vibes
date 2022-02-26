import { backendUrl } from "./backendAPI"


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
  const res = await 
}