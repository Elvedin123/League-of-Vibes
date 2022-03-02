import { useState, useEffect } from "react"
import { getOneTeam } from "../../services/teamPost"
import { useParams } from "react-router-dom"
import Deletepost from "../../components/Delete Post/Deletepost"
import { getTeamComments } from "../../services/comments"
import Commentform from "../../components/Comment form/Commentform"
import Deletecomment from "../../components/Delete comment/Deletecomment"
import Editcomment from "../../components/Edit comment/Editcomment"

export default function Teamdetail(props) {
  const [team, setTeam] = useState([])
  const [comments, setComments] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getTeam = async () => {
      const oneTeam = await getOneTeam(id)
      setTeam(oneTeam)

    }
    const getComments = async () => {
      const allComments = await getTeamComments(id)
      setComments(allComments)

    }
    getComments()
    getTeam()
  }, [id])

  return (
    <div>
      <h1>Team Detail</h1>

      <div>
        <h3>Top <img src={team?.champ1_img} alt="" /></h3>

        <h3>Jungle <img src={team?.champ2_img} alt="" /></h3>

        <h3>Mid <img src={team?.champ3_img} alt="" /></h3>

        <h3>Botlane Carry<img src={team?.champ4_img} alt="" /></h3>

        <h3>Botlane Support<img src={team?.champ5_img} alt="" /></h3>

      </div>
      <div>
        <p>{team?.description}</p>
      </div>
      {
        props.currentUser?.id === team?.user_id ?
          <>

            <Deletepost team={team?.id} />

          </>
          :
          null
      }
      <div>
        {comments.map(comment => {

          return (comment.team_id === team.id ?
            <div key={comment.id}>
              <p>{comment.content}</p>
              <div>
                <Deletecomment comment={comment.id} teamid={props.team_id} />
                <Editcomment teamid={comment.team_id} comment={comment.content} commentid={comment.id} />
              </div>

            </div> : null

          )
        })}
      </div>
      <div><Commentform /></div>
    </div>
  )
}
