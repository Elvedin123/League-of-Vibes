import { useState, useEffect } from 'react'
// import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import { getAllTeams } from '../../services/teamPost'
import { getAllUsers } from '../../services/user'
import { useParams } from 'react-router-dom'
import homecss from "./Home.module.css"


export default function Home() {
  const [teams, setTeams] = useState([])
  const [users, setUsers] = useState([])
  const { id } = useParams()
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

    }
    fetchAllUsers()
    fetchAllChampions()
  }, [id])

  return (

    <div className={homecss.maincontainer}>


      {
        teams.map(team => {

          return (
            <div key={team.id}>
              {users.map(user => {
                return (user.id === team.user_id ?
                  <h2
                    className={homecss.userteam}
                    key={user.id}>{user.username}'s Team Comp</h2> :
                  null
                )
              })}

              <Link
                to={`/teamdetails/${team.id}`}
                key={team.id}>


                <div className={homecss.imgcontainer}>

                  <img
                    className={homecss.img} src={team.champ1_img}
                    alt={team.username} />


                  <img
                    className={homecss.img}
                    src={team.champ2_img}
                    alt={team.username} />

                  <img
                    className={homecss.img} src={team.champ3_img} alt={team.username} />

                  <img
                    className={homecss.img} src={team.champ4_img} alt={team.username} />

                  <img
                    className={homecss.img} src={team.champ5_img} alt={team.username} />

                </div>

              </Link>
            </div>
          )

        })
      }</div>

  )
}
