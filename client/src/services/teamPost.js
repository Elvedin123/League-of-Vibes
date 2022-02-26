import { backendUrl } from "./backendAPI";

export const getAllTeams = async () => {
  const res = await backendUrl.get('/teams')
  return res.data
}

export const getOneTeam = async (team_id) => {
  const res = await backendUrl.get(`/teams/${team_id}`)
  return res.data
}

export const createTeam = async (teamData) => {
  const res = await backendUrl.post(`/teams/${team_id}`, { team: teamData })
  return res.data
}

export const updateTeam = async (team_id, teamData) => {
  const res = await backendUrl.put(`/teams/${team_id}`, { team: teamData })
  return res.data
}

export const deleteTeam = async (team_id) => {
  const res = await backendUrl.delete(`/teams/${team_id}`)
  return res.data
}