import { useState, useEffect } from "react"
import { getOneTeam } from "../../services/teamPost"
import { useParams } from "react-router-dom"
import Deletepost from "../../components/Delete Post/Deletepost"
export default function Teamdetail(props) {
  const [team, setTeam] = useState([])
  const { id } = useParams()
  useEffect(() => {
    const getTeam = async () => {
      const oneTeam = await getOneTeam(id)
      setTeam(oneTeam)

    }
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

    </div>
  )
}
