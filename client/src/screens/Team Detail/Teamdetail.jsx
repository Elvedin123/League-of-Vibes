import { useState, useEffect } from "react"
import { getOneTeam } from "../../services/teamPost"
import { useParams } from "react-router-dom"
import Deletepost from "../../components/Delete Post/Deletepost"
import { getTeamComments } from "../../services/comments"
import Commentform from "../../components/Comment form/Commentform"
import Deletecomment from "../../components/Delete comment/Deletecomment"
import Editcomment from "../../components/Edit comment/Editcomment"
import teamdetailcss from './Teamdetail.module.css'

export default function Teamdetail(props) {
  console.log(props)
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
    <div
      className={teamdetailcss.maincontainer}>

      <h1
        className={teamdetailcss.teamdetail}>
        Team Detail
      </h1>
      <div>
        <div
          className={teamdetailcss.teamcontainer}>
          <div>
            <h3>Top</h3>
            <div
              className={teamdetailcss.champlane}>

              <img
                className={teamdetailcss.img}
                src={team?.champ1_img} alt="" />
            </div>
            <h3>Jungle </h3>
            <div
              className={teamdetailcss.champlane}>
              <img
                className={teamdetailcss.img}
                src={team?.champ2_img} alt="" />
            </div>
            <h3>Mid </h3>
            <div
              className={teamdetailcss.champlane}>

              <img
                className={teamdetailcss.img}
                src={team?.champ3_img} alt="" />
            </div>
            <h3>Botlane Carry</h3>
            <div
              className={teamdetailcss.champlane}>

              <img
                className={teamdetailcss.img}
                src={team?.champ4_img} alt="" />
            </div>
            <h3>Botlane Support</h3>
            <div
              className={teamdetailcss.champlane}>

              <img
                className={teamdetailcss.img}
                src={team?.champ5_img} alt="" />
            </div>
          </div>
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
        <div className={teamdetailcss.commentmaincontainer}>
          <div className={teamdetailcss.commentcontainer}>
            {comments.map(comment => {

              return (comment.team_id === team.id ?
                <div
                  className={teamdetailcss.comments}
                  key={comment.id}>
                  <div >
                    <div className={teamdetailcss.content}>
                      <p>{comment.content}</p>
                    </div>
                  </div>
                  <div className={teamdetailcss.buttons}>
                    <Deletecomment comment={comment.id} teamid={props.team_id} />
                    <Editcomment teamid={comment.team_id} comment={comment.content} commentid={comment.id} />
                  </div>

                </div> : null

              )
            })}
          </div>
        </div>
        <div><Commentform /></div>
      </div>
    </div>
  )
}
