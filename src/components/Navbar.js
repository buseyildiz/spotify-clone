import React from 'react'
import Navigation from './Navbar/Navigation'
import Auth from './Navbar/Auth'

function Navbar() {
  return (
    <nav className='h-[3.75rem] flex items-center justify-between px-8'>
      <Navigation/>
      <Auth/>
    </nav>
  )
}

export default Navbar