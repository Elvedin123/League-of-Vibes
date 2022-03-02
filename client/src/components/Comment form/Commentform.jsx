import { useState } from "react"
import { createComment } from "../../services/comments"
import { useParams } from "react-router-dom"

export default function Commentform(props) {
  const { id } = useParams()
  const default_input = {
    team: id,
    content: ""
  }
  const [comment, setComment] = useState(default_input)

  const handleChange = (e) => {
    const { id, value } = e.target;
    setComment(prevInput => ({
      ...prevInput,
      [id]: value,
    }))
  }

  return (

    <form onSubmit={async (e) => {
      e.preventDefault()
      await createComment(props.currentUser.id, comment)
      window.location.reload(false)
    }}>
      <textarea type="text" id="content" value={comment.content} onChange={handleChange} cols="30" rows="10"></textarea>
      <button>Submit</button>
    </form>
  )
}
