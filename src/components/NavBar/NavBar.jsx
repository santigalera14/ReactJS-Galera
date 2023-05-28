import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <Link to="/" className='logo'><h1>Street Wear</h1></Link>
      <ul className='menu'>
        <li><Link className='menu-link' to='/'>INICIO</Link></li>
        <li><Link className='menu-link' to='/productos/Abrigo'>HODDIES</Link></li>
        <li><Link className='menu-link' to='/productos/Remera'>T-SHIRTS</Link></li>
        <li><Link className='menu-link' to='/productos/Jogger'>JOGGERS</Link></li>
        <li><CartWidget/></li>
      </ul>
    </nav>
  )
}

export default NavBar
