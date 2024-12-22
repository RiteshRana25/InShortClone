import React from 'react'
import './NavBarInshortDiv.css'
import HamburgerDrawer from '../HamburgerDrawerDiv.js'
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