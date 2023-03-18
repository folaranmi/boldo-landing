import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Logo from "../../../assets/images/svg/boldo-logo-white.svg"

function Navigation() {

  const [active, setActive] = useState(false);

  return (
    <div className='navigation'>
      <div className="logo">
        <Link to="/" ><img src={Logo} alt="boldo logo" /></Link>
      </div>
      <ul className={`nav ${active === true ? "active": ''}`}>
        <li className='nav-link'> <Link to="/product">Product</Link> </li>
        <li className='nav-link'> <Link to="/services">Services</Link> </li>
        <li className='nav-link'> <Link to="/about">About</Link> </li>
        <li ><Link to="/login" className='btn btn-primary-white-small'>Login</Link> </li>
      </ul>
      <div className="menu" onClick={() => setActive(!active)}>
        {active? <FiX className='menu__icon '/> : <FiMenu className='menu__icon' />}
        
      </div>

    </div>
  )
}

export default Navigation