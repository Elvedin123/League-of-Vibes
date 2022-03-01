import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { verifyUser } from './services/user.js';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Signup from './screens/Signup/Signup.jsx';
import Login from './screens/Login/Login.jsx';
import Home from './screens/Home/Home.jsx';
import Layout from './components/Layout.jsx';
import Create from './screens/Create.jsx';
import Champdetails from './screens/Champ details/Champdetails.jsx';
import Teamdetail from './screens/Team Detail/Teamdetail.jsx';
import Profile from './screens/Profile page/Profile.jsx';



function App() {
  const [teamcomp, setTeamcomp] = useState([]);
  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser()
      setCurrentUser(user)

    }
    getUser()
  }, [])

  const logout = () => {
    localStorage.removeItem('authToken')
    setCurrentUser(null)
    navigate('/')
  }
  return (
    <div className="App">
      <Layout currentUser={currentUser} logout={logout}>
        <Routes>
          <Route path='/' element={<Login setCurrentUser={setCurrentUser} />} />
          <Route path='/home' element={<Home currentUser={currentUser} />} />
          <Route path="/profile" element={<Profile currentUser={currentUser} />} />
          <Route path='/teamdetails/:id' element={<Teamdetail currentUser={currentUser} />} />
          <Route path='/signup' element={<Signup setCurrentUser={setCurrentUser} />} />
          <Route path='/create' element={<Create teamcomp={teamcomp} setTeamcomp={setTeamcomp} />} />
          <Route path='/champdetail/:id' element={<Champdetails />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
