import React from 'react'
import { deleteTeam } from '../../services/teamPost'
import { useNavigate } from 'react-router-dom'
export default function Deletepost(props) {

  const navigate = useNavigate()
  const handleDelete = async (id) => {
    await deleteTeam(id)
    navigate('/home')
  }

  return (
    <div><button onClick={() => handleDelete(props.team)}>Delete</button></div>
  )
}
