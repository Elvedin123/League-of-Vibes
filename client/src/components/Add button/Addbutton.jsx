import React from 'react'


export default function Addbutton(props) {
  const { championimg, teamcomp, setTeamcomp } = props


  const handleAdd = () => {
    if (teamcomp.length < 5) {
      setTeamcomp((prevTeamcomp) => [...prevTeamcomp, championimg])
    }

  }

  return (
    <div><button
      onClick={handleAdd}
    >Add to Team</button></div>
  )
}
