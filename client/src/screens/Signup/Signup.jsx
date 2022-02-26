import { useState } from 'react'
import { signupUser } from '../../services/user.js'
import { useNavigate } from 'react-router-dom'

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
    <form onSubmit={async (e) => {
      e.preventDefault()
      const res = await signupUser(formData)
      props.setCurrentUser(res)

      navigate('/home')
    }}>
      <label>Username
        <input type="text" onChange={handleChange} value={formData.username} id='username' />
      </label>
      <label>Avatar
        <input type="text" onChange={handleChange} value={formData.img_url} id='img_url' />
      </label>
      <label>First Name
        <input type="text" onChange={handleChange} value={formData.first_name} id='first_name' />
      </label>
      <label>Last Name
        <input type="text" onChange={handleChange} value={formData.last_name} id='last_name' />
      </label>
      <label>Email
        <input type="text" onChange={handleChange} value={formData.email} id='email' />
      </label>
      <label>Password
        <input type="text" onChange={handleChange} value={formData.password} id='password' />
      </label>
      <button>Enter the Rift!</button>
    </form>
  )
}
