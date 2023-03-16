import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../../assets/images/svg/boldo-logo-white.svg"

function Navigation() {
  return (
    <div className='navigation'>
        <div className="logo">
            <Link to="/" ><img src={Logo} alt="boldo logo" /></Link>
        </div>
        <ul className="nav">
            <li className='nav-link'> <Link to="/product">Product</Link> </li>
            <li className='nav-link'> <Link to="/services">Services</Link> </li>
            <li className='nav-link'> <Link to="/about">About</Link> </li>
            <li ><Link to="/login" className='btn btn-primary-white-small'>Login</Link> </li>
        </ul>
    </div>
  )
}

export default Navigation