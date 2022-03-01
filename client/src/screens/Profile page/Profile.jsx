import React from 'react'
import { verifyUser } from '../../services/user'
import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { getAllTeams } from '../../services/teamPost'

export default function Profile(props) {
  const [user, setUser] = useState()
  const [teams, setTeams] = useState([])
  const { id } = useParams()


  useEffect(() => {
    const getUser = async () => {
      const yourUser = await verifyUser(id)
      setUser(yourUser)

    }
    const getTeams = async () => {
      const allTeams = await getAllTeams()
      setTeams(allTeams)


    }
    getTeams()
    getUser()
  }, [id])

  return (
    <div>
      <div>
        {teams.map(team => {
          return (
            <div key={team.id}>
              {/* {team.user_id === user.id ? <div>
                <img src={team?.champ1_img} alt="top" />
                <img src={team?.champ2_img} alt="jng" />
                <img src={team?.champ3_img} alt="mid" />
                <img src={team?.champ4_img} alt="adc" />
                <img src={team?.champ5_img} alt="sup" />
              </div> : null} */}
            </div>
          )

        })}
      </div>
      <div>
        <h1>Welcome, {user?.first_name}</h1>
        <img src={user?.img_url} alt="" />
      </div>

    </div>
  )
}
