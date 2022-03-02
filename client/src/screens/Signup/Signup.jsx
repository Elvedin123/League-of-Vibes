import { useState } from 'react'
import { signupUser } from '../../services/user.js'
import { useNavigate } from 'react-router-dom'
import signupcss from './Signup.module.css'

export default function Signup(props) {
  const [formData, setFormData] = useState({
    username: '',
    img_url: '',
    first_name: '',
    last_name: '',
    email: '',
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
    <div className={signupcss.container}>
      <h3 className={signupcss.signup}>Sign Up!</h3>
      <div className={signupcss.form_container}>
        <form className={signupcss.form} onSubmit={async (e) => {
          e.preventDefault()
          const res = await signupUser(formData)
          props.setCurrentUser(res)

          navigate('/home')
        }}>
          <label>Username
            <input
              className={signupcss.input}
              type="text"
              onChange={handleChange} value={formData.username}
              id='username' />
          </label>
          <label>Avatar
            <input
              className={signupcss.input}
              type="text"
              onChange={handleChange} value={formData.img_url}
              id='img_url' />
          </label>
          <label>First Name
            <input
              className={signupcss.input}
              type="text"
              onChange={handleChange} value={formData.first_name} id='first_name' />
          </label>
          <label>Last Name
            <input
              className={signupcss.input}
              type="text"
              onChange={handleChange} value={formData.last_name} id='last_name' />
          </label>
          <label>Email
            <input
              className={signupcss.input}
              type="text"
              onChange={handleChange} value={formData.email} id='email' />
          </label>
          <label>Password
            <input
              className={signupcss.input}
              type="text"
              onChange={handleChange} value={formData.password} id='password' />
          </label>
          <button className={signupcss.enterrift}>Enter the Rift!</button>
        </form>
      </div>
    </div>
  )
}
