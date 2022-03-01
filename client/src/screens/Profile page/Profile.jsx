import React from 'react'
import { verifyUser } from '../../services/user'
import { useState, useEffect } from 'react'
export default function Profile() {
  const [user, setUser] = useState()
  const id = localStorage.getItem('id')
  useEffect(() => {
    const getUser = async () => {
      const yourUser = await verifyUser(id)
      setUser(yourUser)

    }
    getUser()
  }, [id])

  return (
    <div>
      <h1>Welcome, {user.first_name}</h1>

    </div>
  )
}
