import { updateComment } from "../../services/comments"
import { useState } from "react"


export default function Editcomment(props) {

  const default_input = {
    content: props.comment
  }
  const [comment, setComment] = useState(default_input)
  const [toggle, setToggle] = useState(false)

  const handleChange = (e) => {
    // console.log(e)
    e.preventDefault()
    const { id, value } = e.target;
    setComment(prevInput => ({
      ...prevInput,
      [id]: value,
    }))
  }
  return (
    <div>
      <button
        onClick={() => setToggle((prev) => !prev)}
      >Edit</button>

      {
        toggle &&
        <form
          onSubmit={async (e) => {
            e.preventDefault()
            await updateComment(props.team_id, props.commentid, comment)
            window.location.reload(false)
          }}
        >
          <input autoFocus id="content" name="comment" value={comment.content} type="text" onChange={(e) => handleChange(e)} />

          <button>Submit</button>
        </form>}
    </div>
  )
}
