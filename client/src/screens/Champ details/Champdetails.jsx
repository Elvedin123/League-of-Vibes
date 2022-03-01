import { useEffect, useState } from "react"
import { getChampion } from "../../services/champions"
import { useParams } from "react-router-dom"

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
    <div>
      <h1>Champion Detail</h1>

      <div >
        <img src={champion.img} alt={champion.name} />
      </div>
      <div>

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

