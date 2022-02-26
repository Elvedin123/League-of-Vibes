import axios from "axios"
const baseUrl = 'https://league-of-vibes-backend.herokuapp.com/users'

export const backendUrl = axios.create({
  baseURL = baseUrl
})