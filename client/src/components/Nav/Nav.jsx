import { Link } from "react-router-dom"


export default function Nav(props) {
  const { logout, currentUser } = props
  console.log(currentUser)

  return (
    <div>
      {currentUser ?
        <>
          <Link to='/home'><h1>League of Vibes</h1></Link>
          <h3>Welcome, {currentUser.username}</h3>
          <Link to='/create'>Create a Team</Link>
          <Link to='/profile'>Profile</Link>
          <button onClick={logout} >Logout</button>
        </>
        :
        <>
          <h1><Link to='/'>League of Vibes</Link></h1>
          <h3>Become a Legend!</h3>
        </>

      }
    </div>
  )
}
