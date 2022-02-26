import axios from 'axios'

const baseUrl = 'https://ddragon.leagueoflegends.com/cdn/12.4.1/data/en_US/champion.json/'

const leagueUrl = axios.create({
  baseURL = baseUrl
})

export const getAllChampions = async () => {
  const res = await leagueUrl.get()
  return res.data
}