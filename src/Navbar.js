import React from 'react'

const Navbar = props => {
  return (
    <div className="navbar">
      <div className="navbar__elements">
        <span>RankJS</span>
        <span onClick={props.handleLogout} style={{ cursor: 'pointer' }}>Logout</span>
      </div>
    </div>
  )
}

export default Navbar