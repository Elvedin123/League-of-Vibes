

export default function DeleteChamp(props) {
  const { teamcomp, setTeamcomp, img } = props


  const i = teamcomp.indexOf(img)
  // console.log(i)
  const handleDelete = (() => {

    setTeamcomp(teamcomp.splice(i, 1))
  })
  return (
    <div><button onClick={handleDelete}>Delete</button></div>
  )
}
