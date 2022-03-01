import { getAllChampions } from "../services/champions.js"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Addbutton from "../components/Add button/Addbutton.jsx"
import { createTeam } from "../services/teamPost.js"
import { useNavigate } from "react-router-dom"

export default function Create(props) {

  const [champions, setChampions] = useState([])
  const teampost = {
    champ1_img: props.teamcomp[0],
    champ2_img: props.teamcomp[1],
    champ3_img: props.teamcomp[2],
    champ4_img: props.teamcomp[3],
    champ5_img: props.teamcomp[4],
    description: ""
  }
  const [formData, setFormData] = useState(teampost)
  const navigate = useNavigate()


  useEffect(() => {
    const fetchChampions = async () => {
      const allChampions = await getAllChampions()
      setChampions(allChampions)

    }
    fetchChampions()
  }, [])

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div>
      <h1>Select Your Champions</h1>
      {champions.map(champion => {

        return (
          <div key={champion.id}>
            <div  >
              <Link to={`/champdetail/${champion.id}`}>
                <h3>{champion.name}</h3>
                <img src={champion.img} alt="" />
              </Link>
            </div>
            <Addbutton championimg={champion.img} teamcomp={props.teamcomp} id={champion.id}
              setTeamcomp={props.setTeamcomp} />
          </div>
        )
      })}
      <div>
        <div>
          {props.teamcomp.map(img => {
            return (
              <div>
                <img src={img} alt="'''"></img>
                <button>delete</button>
              </div>
            )
          })}
          <div><p></p></div>
          <button>Post!</button>
        </div>
        <form onSubmit={async (e) => {
          e.preventDefault()
          const team = {
            champ1_img: props.teamcomp[0],
            champ2_img: props.teamcomp[1],
            champ3_img: props.teamcomp[2],
            champ4_img: props.teamcomp[3],
            champ5_img: props.teamcomp[4],
            description: formData.description
          }
          await createTeam(team)
          props.setTeamcomp([])
          navigate('/home')
        }}>
          <label>Description
            <input type="text" onChange={handleChange} value={formData.description} id="description" />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}
