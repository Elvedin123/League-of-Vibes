import { Link } from "react-router-dom"
import navcss from "./Nav.module.css"

export default function Nav(props) {
  const { logout, currentUser } = props
  // console.log(currentUser)

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
          <nav className={navcss.preauth_login_nav}>
            <h1 ><Link className={navcss.preauth_title} to='/'>League of Vibes</Link></h1>
          </nav>
          <h3>Become a Legend!</h3>
        </>

      }
    </div>
  )
}
