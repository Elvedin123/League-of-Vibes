import { getAllChampions } from "../services/champions.js"
import { useEffect, useState } from "react"
export default function Create() {
  const [champions, setChampions] = useState([])
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
      {champions.map(champion => {

        return (
          <div key={champion.id}>
            <h3>{champion.name}</h3>
            <img src={champion.img} alt="" />
          </div>
        )
      })}

    </div>
  )
}
