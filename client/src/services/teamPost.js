import { backendUrl } from "./backendAPI";

export const getAllTeams = async () => {
  const res = await backendUrl.get('/teams')
  return res.data
}
export const getOneTeam = async (team_id) => {
  const res = await backendUrl.get(`/teams/${team_id}`)
  return res.data
}