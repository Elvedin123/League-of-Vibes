import { backendUrl } from "./apibackend.js";

export const getAllChampions = async () => {
  const res = await backendUrl.get('/champions')
  return res.data
}

export const getChampion = async (id) => {
  const res = await backendUrl.get(`/champions/${id}`)
  return res.data
}
