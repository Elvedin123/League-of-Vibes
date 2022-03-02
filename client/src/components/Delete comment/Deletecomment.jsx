import { deleteComment } from "../../services/comments"

export default function Deletecomment(props) {
  const handleDelete = async (id) => {
    await deleteComment(props.team_id, id)
    window.location.reload(false)
  }
  return (
    <div><button onClick={() => handleDelete(props.comment)}>Delete</button></div>
  )
}
