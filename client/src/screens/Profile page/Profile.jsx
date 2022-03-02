import React from 'react'
import { verifyUser } from '../../services/user'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getAllTeams } from '../../services/teamPost'
import Deletepost from '../../components/Delete Post/Deletepost'
import profilecss from './Profile.module.css'

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
    <div className={profilecss.maincontainer}>
      <div>
        {teams.map(team => {

          return (
            <div key={team.id}>
              {team.user_id === user.id ?
                <div className={profilecss.champarr} >
                  <img
                    className={profilecss.champimg}
                    src={team?.champ1_img} alt="top" />
                  <img
                    className={profilecss.champimg}
                    src={team?.champ2_img} alt="jng" />
                  <img
                    className={profilecss.champimg}
                    src={team?.champ3_img} alt="mid" />
                  <img
                    className={profilecss.champimg}
                    src={team?.champ4_img} alt="adc" />
                  <img
                    className={profilecss.champimg}
                    src={team?.champ5_img} alt="sup" />
                  <Deletepost team={team.id} currentuser={props.currentUser} />
                </div> : null}

            </div>
          )

        })}
      </div>
      <div className={profilecss.usercontainer}>
        <h1 className={profilecss.welcome}>Welcome, {user?.first_name}</h1>
        <img className={profilecss.img} src={user?.img_url} alt="" />
      </div>

    </div>
  )
}
