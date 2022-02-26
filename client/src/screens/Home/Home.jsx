import { useState, useEffect } from 'react'
// import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import { getAllTeams } from '../../services/teamPost'
export default function Home(props) {
  const [teams, setTeams] = useState([])
  const { currentUser } = props
  const user = localStorage.getItem("username")
  useEffect(() => {
    const fetchAllChampions = async () => {
      const allTeams = await getAllTeams()
      setTeams(allTeams)
      console.log(allTeams)
    }
    fetchAllChampions()
  }, [])

  return (

    <div>{
      teams.map(team => {

        return (
          <Link to='/teamdetails' key={team.id}>
            <div>
              <h2>{user}'s Team</h2>
              <img src={team.champ1_img} alt={team.username} />
              <img src={team.champ2_img} alt={team.username} />
              <img src={team.champ3_img} alt={team.username} />
              <img src={team.champ4_img} alt={team.username} />
              <img src={team.champ5_img} alt={team.username} />
            </div>
          </Link>
        )

      })
    }</div>

  )
}
