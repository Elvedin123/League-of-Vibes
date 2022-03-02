import axios from "axios"

const baseUrl = process.env.NODE_ENV === 'production' ? /* link to your heroku app. Example:*/'https://league-of-vibes-backend.herokuapp.com/' : 'http://localhost:3000'

export const backendUrl = axios.create({
  baseURL: baseUrl
})