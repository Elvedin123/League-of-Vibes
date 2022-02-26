import { backendUrl } from "./backendAPI";

export const getTeamComments = async (team_id) => {
  const res = await backendUrl.get(`/teams/${team_id}/comments`)
  return res.data
}