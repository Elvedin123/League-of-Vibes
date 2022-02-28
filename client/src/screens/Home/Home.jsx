import { useState, useEffect } from 'react'
// import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import { getAllTeams } from '../../services/teamPost'
import { getAllUsers } from '../../services/user'
export default function Home() {
  const [teams, setTeams] = useState([])
  const [users, setUsers] = useState([])
  // const { currentUser } = props
  // const user = localStorage.getItem("username")

  useEffect(() => {
    const fetchAllUsers = async () => {
      const allUsers = await getAllUsers()
      setUsers(allUsers)
    }
    const fetchAllChampions = async () => {
      const allTeams = await getAllTeams()
      setTeams(allTeams)
      console.log(allTeams)
    }
    fetchAllUsers()
    fetchAllChampions()
  }, [])

  return (

    <div>{
      teams.map(team => {

        return (
          <Link to='/teamdetails' key={team.id}>
            <div>
              {users.map(user => {
                return (user.id === team.user_id ? <h2 key={user.id}>{user.username}'s Team Comp</h2> :
                  null
                )
              })}
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
