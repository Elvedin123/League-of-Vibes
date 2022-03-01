import { useState, useEffect } from "react"
import { getAllTeams } from "../../services/teamPost"
import { useParams } from "react-router-dom"

export default function Teamdetail() {
  const [team, setTeam] = useState([])
  const { id } = useParams()
  useEffect(() => {
    const getTeam = async () => {
      const oneTeam = await getAllTeams(id)
      setTeam(oneTeam)
      console.log(oneTeam)
    }
    getTeam()
  }, [id])
  console.log(team)
  return (
    <div>
      <h1>Team Detail</h1>

      <div>
        <h3>Top <img src={team[0]?.champ1_img} alt="" /></h3>

        <h3>Jungle <img src={team[0]?.champ2_img} alt="" /></h3>

        <h3>Mid <img src={team[0]?.champ3_img} alt="" /></h3>

        <h3>Botlane Carry<img src={team[0]?.champ4_img} alt="" /></h3>

        <h3>Botlane Support<img src={team[0]?.champ5_img} alt="" /></h3>

      </div>
      <div>
        <p>{team[0]?.description}</p>
      </div>
    </div>
  )
}
