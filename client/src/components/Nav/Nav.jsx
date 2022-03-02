import { Link } from "react-router-dom"
import navcss from "./Nav.module.css"
import { BiLogOut } from 'react-icons/bi'
export default function Nav(props) {
  const { logout, currentUser } = props
  // console.log(currentUser)

  return (
    <div className={navcss.auth_login_nav}>
      {currentUser ?
        <nav>
          <div className={navcss.maincontainer}>
            <div
              className={navcss.titlecontainer}>
              <h1 >
                <Link
                  className={navcss.authtitle}
                  to='/home'>League of Vibes
                </Link>
              </h1>
              <h3 className=
                {navcss.welcome}>
                Welcome,
                {currentUser.username}
              </h3>
            </div>
            <div className={navcss.navlink}>
              <Link
                className={navcss.create}
                to='/create'>
                Create a Team
              </Link>
              <Link
                className={navcss.profile}
                to='/profile'>
                Profile
              </Link>
              <a className={navcss.logout}
                href="https://modest-cray-0cd808.netlify.app/"
                onClick={logout}>
                <BiLogOut />
              </a>
            </div>
          </div>
        </nav>
        :
        <>
          <nav className={navcss.preauth_login_nav}>
            <h1 ><Link className={navcss.preauth_title} to='/'>League of Vibes</Link></h1>
          </nav>

        </>

      }
    </div>
  )
}
