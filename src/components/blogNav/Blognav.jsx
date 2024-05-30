import React from 'react'
import { Link } from 'react-router-dom';
import '../nav/nav.scss';

const Blognav = () => {
  return (
    <div id='Nav'>
        <ul>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/blogs' >Blogs</Link></li>
            {/* <li><Link to='/#' >Create Blog</Link></li>
            <li><Link to='/#' >Sign in</Link></li>
            <li><Link to='/#' >Sign up</Link></li>
            <li><Link to='#' >Sign out</Link></li> */}
        </ul>
    </div>
  )
}

export default Blognav