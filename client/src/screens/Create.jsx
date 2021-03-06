import { getAllChampions } from "../services/champions.js"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Addbutton from "../components/Add button/Addbutton.jsx"
import { createTeam } from "../services/teamPost.js"
import { useNavigate } from "react-router-dom"
import DeleteChamp from "../components/DeleteChamp/DeleteChamp.jsx"
import createcss from './Create.module.css'

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
      <h1 className={createcss.selecttitle}>Select Your Champions</h1>
      <div className={createcss.mainchampcontain}>
        {champions.map(champion => {

          return (

            <div key={champion.id}>
              <div className={createcss.champcontainer}>
                <h3 className={createcss.champname}>
                  {champion.name}
                </h3>
                <Link to={`/champdetail/${champion.id}`}>

                  <img className={createcss.img} src={champion.img} alt="" />
                </Link>
              </div>
              <Addbutton championimg={champion.img} teamcomp={props.teamcomp} id={champion.id}
                setTeamcomp={props.setTeamcomp} />
            </div>
          )
        })}
      </div>
      <div className={createcss.compcontainer}>
        <div className={createcss.comparray}>
          {props.teamcomp.map(img => {
            return (
              <div key={img.indexOf(0)}>
                <img className={createcss.arrimg} src={img} alt=""></img>
                <DeleteChamp setTeamcomp={props.setTeamcomp} teamcomp={props.teamcomp} img={img} />
              </div>
            )
          })}

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
          <label className={createcss.description}>Description
            <input type="text" onChange={handleChange} value={formData.description} id="description" />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}
