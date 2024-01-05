import React from "react";
import "./Footer.css";
import img1 from "./Imgs/192.png";
import copy from "./Imgs/copy.png";
import face from "./Imgs/face.png"
import ttk from "./Imgs/tiktok.png"
import ig from "./Imgs/ig.png"

export const Footer = () => {
  return (
    <>
      {/* CONTENDOR PRINCIPAL */}
      <div className="foo_contenedor">
        {/* CAJA DE ARRIBA */}
        <div className="foo_top">
          {/* CAJA IZQUIERDA */}
          <div className="foo_titulo">
            <img src={img1} alt="" />
            <a href="#">Faraday Cup</a>
          </div>
          {/* CAJA DERECHA */}
          <div className="foo_video">
            <a href="#">See more tournaments</a>
          </div>
        </div>

        {/* CAJA DE ABAJO */}
        <div className="foo_bot">
          {/* CAJA IZQUIERDA */}
          <div className="fo_bot_iz">
            <img src={copy} alt="img" />
            <p>Faraday Cup</p>
            <p>Contacts</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>Contacts</p>
          </div>
          {/* CAJA DERECHA */}
          <div className="fo_bot_der">
            <p>Social networks</p>
            <a href="https://www.facebook.com/profile.php?id=61550732799741&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
              <img src={face} alt="img" className="face"/>
            </a>
            <a href="https://www.tiktok.com/@copa_faraday?_t=8ijvuVBgIuk&_r=1" target="_blank" rel="noopener noreferrer">
              <img src={ttk} alt="img" className="ttk"/>
            </a>
            <a href="https://www.instagram.com/copa_faraday?igsh=MWNyanoweGN0cGZpdA==" target="_blank" rel="noopener noreferrer">
              <img src={ig} alt="img" className="ig"/>
              </a>
          </div>
        </div>
      </div>
    </>
  );
};
