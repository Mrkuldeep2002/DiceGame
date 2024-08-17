import React from 'react'

const Nav = () => {
  return (
    <nav className='container'>
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>

      <ul>
        <li>Menu</li>
        <li>About</li>
        <li>Location</li>
        <li>Contact</li>
      </ul>

      <button>Login</button>
    </nav>
  )
}

export default Nav
