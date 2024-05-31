import React from 'react'
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userInfo } from '../../atoms/user';
import '../nav/nav.scss';

const Blognav = () => {
  let [user, setUser] = useRecoilState(userInfo);
    function handleSignout() {
      setUser({isLoggedIn: false, data:{}});
    }
  return (
    <div id='Nav'>
        <ul>
            <li>
            <Link to='/' >Home</Link>
            </li>
            <li>
            <Link to='/blogs' >Blog</Link>
            </li>
            <li style={{ display: user.data.role != "admin" ? 'none' : 'flex' }} >
            <Link to='/create' >Create Blog</Link>
            </li>
            <li style={{ display: user.isLoggedIn ? "none" : 'flex'  }}>
            <Link to='/signin' >Sign in</Link>
            </li>
            <li style={{ display: user.isLoggedIn ? "none" : 'flex'  }}>
            <Link to='/signup' >Sign up</Link>
            </li>
            <li onClick={()=> handleSignout()} style={{ display: user.isLoggedIn ? "flex" : 'none'  }}>
            <Link to='#' >Sign out</Link>
            </li>
        </ul>
    </div>
  )
}

export default Blognav