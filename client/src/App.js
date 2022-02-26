import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { verifyUser } from './services/user.js';
import './App.css';
import Signup from './screens/Signup/Signup.jsx';
import Login from './screens/Login/Login.jsx';
function App() {
  const [currentUser, setCurrentUser] = useState(null)
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
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path='/signup' element={<Signup setCurrentUser={setCurrentUser} />} />
      </Routes>
    </div>
  );
}

export default App;
