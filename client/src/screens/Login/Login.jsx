import { useState } from 'react'
import { loginUser } from '../../services/user.js'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logincss from './Login.module.css'
export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const navigate = useNavigate()
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  return (
    <div className={logincss.container}>
      <h3 className={logincss.legends}>Become a Legend!</h3>
      <div className={logincss.form_container}>
        <form className={logincss.form} onSubmit={async (e) => {
          e.preventDefault()
          const res = await loginUser(formData)
          props.setCurrentUser(res)

          navigate('/home')
        }}>
          <label>Username
            <input className={logincss.input} type="text" onChange={handleChange} value={formData.username} id='username' />
          </label>
          <label>Password
            <input className={logincss.input} type="text" onChange={handleChange} value={formData.password} id='password' />
          </label>
          <button className={logincss.button}>Enter the Rift!</button>
          <h3 className={logincss.noacc}>Don't have an account?<Link className={logincss.presshere} to='/signup'><button className={logincss.pressbutton}>Press here</button></Link></h3>
        </form>
      </div>
    </div>
  )
}
