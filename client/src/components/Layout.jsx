import React from 'react'
import Footer from './Footer/Footer'
import Nav from './Nav/Nav'

export default function Layout(props) {
  const { currentUser, logout } = props
  return (
    <div>
      <Nav currentUser={currentUser} logout={logout} />
      <div>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
