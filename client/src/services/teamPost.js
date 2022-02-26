import { backendUrl } from "./backendAPI";

export const getAllTeams = async () => {
  const res = await backendUrl.get('/teams')
  return res.data
}