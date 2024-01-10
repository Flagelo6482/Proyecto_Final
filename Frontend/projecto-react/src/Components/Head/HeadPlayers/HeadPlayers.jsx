import React from 'react'
import "./Head.css"
import img from "./Imgs/192.png"

export const Head = () => {
  return (
    <>
    {/* CONTENEDOR PRINCIPAL */}
    <div className="head_contenedor">

        <div className="head_img">
            <a href=""><img src={img} alt="img" /></a>
        </div>

        <div className="head_title">
            <p>🔥🏀🏆 FARADAY CUP 🏆🏀🔥</p>
        </div>

        <div className="head_link">
            <a href="#">Home</a>
        </div>
    </div>
    </>
  )
}