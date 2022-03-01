import { getAllChampions } from "../services/champions.js"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Addbutton from "../components/Add button/Addbutton.jsx"
import { createTeam } from "../services/teamPost.js"
import { useNavigate } from "react-router-dom"

export default function Create(props) {
  const [champions, setChampions] = useState([])
  const teampost = {
    champ1_img: props.teamcomp,
    champ2_img: props.teamcomp,
    champ3_img: props.teamcomp,
    champ4_img: props.teamcomp,
    champ5_img: props.teamcomp,
    description: ""
  }
  const [formData, setFormData] = useState(teampost)
  const navigate = useNavigate()
  // console.log(formData.description)

  useEffect(() => {
    const fetchChampions = async () => {
      const allChampions = await getAllChampions()
      setChampions(allChampions)
      // console.log(allChampions)
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
          <div>
            <div key={champion.id} >
              <Link to={`/champdetail/${champion.id}`}>
                <h3>{champion.name}</h3>
                <img src={champion.img} alt="" />
              </Link>
            </div>
            <Addbutton championimg={champion.img} teamcomp={props.teamcomp} id={champion.id} />
          </div>
        )
      })}
      <div>
        <div>
          {props.teamcomp.map(img => {
            return (
              <div>
                <img src={img}></img>
                <button>delete</button>
              </div>
            )
          })}
          <div><p></p></div>
          <button>Post!</button>
        </div>
        <form onSubmit={async (e) => {
          e.preventDefault()
          await createTeam(formData)
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
