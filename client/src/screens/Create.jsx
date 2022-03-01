import { getAllChampions } from "../services/champions.js"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Addbutton from "../components/Add button/Addbutton.jsx"

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
  console.log(props.teamcomp)

  useEffect(() => {
    const fetchChampions = async () => {
      const allChampions = await getAllChampions()
      setChampions(allChampions)
      // console.log(allChampions)
    }
    fetchChampions()
  }, [])

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
        <form>
          <label>Description
            <input type="text" value={teampost.description} />
          </label>
        </form>
      </div>
    </div>
  )
}
