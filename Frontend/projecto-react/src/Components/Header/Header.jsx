import React from 'react'
import './Header.css'
import img from '../../Assets/images/192.png'
import {Outlet, Link} from "react-router-dom";



export const Header = () => {
  return (
    <>
    {/* <div className="cont_header">
        <img src={img} alt="img" className='logo'/>

        <ul className="cont_rutas">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/games">Games</Link></li>
          <li><Link to="/boards">Boards</Link></li>
          <li><Link to="/players">Players</Link></li>
          <li><Link to="/teams">Teams</Link></li>
        </ul>

        <a href="Login.jsx" className='cont_login'>Start</a>
        <Outlet />
    </div> */}
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/games">Games</Link>
        </li>
        <li>
          <Link to="/boards">Boards</Link>
        </li>
        <li>
          <Link to="/players">Players</Link>
        </li>
        <li>
          <Link to="/teams">Teams</Link>
        </li>
      </ul>
    </nav>
    <hr />
    <Outlet />
    </>
  )
}