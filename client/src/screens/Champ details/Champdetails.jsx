import { useEffect, useState } from "react"
import { getChampion } from "../../services/champions"
import { useParams } from "react-router-dom"
import championdetailcss from './Champdetails.module.css'

export default function Champdetails() {
  const [champion, setChampion] = useState([])
  const { id } = useParams()
  useEffect(() => {
    const fetchChamp = async () => {
      const champ = await getChampion(id)
      setChampion(champ)

    }
    fetchChamp()
  }, [id])

  return (
    <div className={championdetailcss.maincontain}>
      <h1 className={championdetailcss.detailtitle}>Champion Detail</h1>

      <div className={championdetailcss.imgcontain}>
        <img src={champion.img} alt={champion.name} />
      </div>
      <div className={championdetailcss.details}>

        <div>
          <h2>{champion.name}</h2>
          <h3>Role: {champion.role}</h3>
          <h3>Lane: {champion.lane}</h3>
          <p>{champion.lore}</p>
        </div>
      </div>
    </div>
  )
}

