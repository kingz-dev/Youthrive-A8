import React from 'react'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../routesData'
import './nav.scss'

const Nav = () => {
  return (
    <div id='Nav'>
      <ul>
        {/* <li><Link to='/' >Home</Link></li>
        <li><Link to='/blogs' >Blogs</Link></li>
        <li><Link to='/about' >About</Link></li>
        <li><Link to='/portfolio' >Portfolio</Link></li> */}
        {AppRoutes.map((route) => {
          return (
            <li style={{ display: route.navName === "null" ? 'none' : 'flex' }} key={route.id}>
                  <Link to={route.path}>{route.navName}</Link>
                </li>
              );
        })}
      </ul>
    </div>
  )
}

export default Nav