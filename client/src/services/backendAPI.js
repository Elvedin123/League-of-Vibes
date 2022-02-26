import axios from "axios"

const baseUrl = 'https://league-of-vibes-backend.herokuapp.com/'

export const backendUrl = axios.create({
  baseURL: baseUrl
})