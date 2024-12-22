import React from 'react'
import './NavBarInshort.css'
import HamburgerDrawer from '../HamburgerDrawer.js'
const NavBarInshort = ({setCategory}) => {
  return (
    <div className='navbar'>
      <div className='span'>
        <HamburgerDrawer setCategory={setCategory} ></HamburgerDrawer>
      </div>
      <img src='https://inshorts.com/dist/images/home_page/logo.png'></img>
    </div>
  )
}

export default NavBarInshort