import { backendUrl } from "./backendApi";

export const getAllChampions = async () => {
  const res = await backendUrl.get('/champions')
  return res.data
}
