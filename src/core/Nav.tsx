import React from 'react'
import { NavLink } from 'react-router-dom'
import { menu } from '../helpers/contenido/es/contenido'

const Nav = () => {
  return (
   <nav className='nav'>
     <NavLink to="/"><img src="./assets/enrique_teruel_logo-white.png" alt="logo" className='nav__logo' /></NavLink>
     <div className='nav__hamburguer'>
      <span className="nav__hamburguer-lines"></span>
      <span className="nav__hamburguer-lines"></span>
      <span className="nav__hamburguer-lines"></span>
     </div>
     <div className='nav__menu'>
       <ul>
{menu.map(item=> <NavLink to={item.link}><li className="nav__menu-item">{item.item}</li></NavLink>)}
       </ul>
     </div>
   </nav>
  )
}

export default Nav