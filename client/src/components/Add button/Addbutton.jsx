import React from 'react'


export default function Addbutton(props) {
  const { championimg, teamcomp } = props
  // console.log(championimg)

  const handleAdd = (e) => {
    if (teamcomp.length < 5) {
      teamcomp.push(championimg)
    }

  }

  return (
    <div><button
      onClick={handleAdd}
    >Add to Team</button></div>
  )
}
