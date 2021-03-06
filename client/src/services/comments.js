import { backendUrl } from "./apibackend.js";

export const getTeamComments = async (team_id) => {
  const res = await backendUrl.get(`/teams/${team_id}/comments`)
  return res.data
}

export const createComment = async (team_id, commentData) => {
  const res = await backendUrl.post(`/teams/${team_id}/comments`, { comment: commentData })
  return res.data
}

export const updateComment = async (team_id, comment_id, commentData) => {
  const res = await backendUrl.put(`/teams/${team_id}/comments/${comment_id}`, { comment: commentData })
  return res.data
}

export const deleteComment = async (team_id, comment_id) => {
  const res = await backendUrl.delete(`/teams/${team_id}/comments/${comment_id}`)
  return res.data
}