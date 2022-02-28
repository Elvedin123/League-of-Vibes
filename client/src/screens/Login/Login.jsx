import { useState } from 'react'
import { loginUser } from '../../services/user.js'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
    <form onSubmit={async (e) => {
      e.preventDefault()
      const res = await loginUser(formData)
      props.setCurrentUser(res)

      navigate('/home')
    }}>
      <label>Username
        <input type="text" onChange={handleChange} value={formData.username} id='username' />
      </label>
      <label>Password
        <input type="text" onChange={handleChange} value={formData.password} id='password' />
      </label>
      <button>Enter the Rift!</button>
      <h3>Don't have an account?<Link to='/signup'>Press here</Link></h3>
    </form>
  )
}
