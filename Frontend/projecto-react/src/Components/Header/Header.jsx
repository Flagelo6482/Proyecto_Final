import React from 'react'
import './Header.css'
import img from '../../Assets/images/192.png'
import {Outlet, Link} from "react-router-dom";



export const Header = () => {
  return (
    <>
    <div className="cont_header">
        <img src={img} alt="img" className='logo'/>

        <ul className="cont_rutas">
          <a href="#">Home</a>
          <a href="#">Games</a>
          <a href="#">Boards</a>
          <a href="#">Players</a>
          <a href="#">Teams</a>
        </ul>

        <a href="Login.jsx" className='cont_login'>Start</a>
    </div>
    </>
  )
}