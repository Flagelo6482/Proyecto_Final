import React from "react";
import "./RegisterTeam.css";
import { Head } from "../Head/Head";
import img1 from "./Imgs/img1.png";
import img2 from "./Imgs/img2.png";

export const RegisterTeam = () => {
  return (
    <>
      <Head />
      {/* CONTENEDOR PRINCIPAL */}
      <div className="rg_t_contenedor">
        {/* IMG IZQUIERDA */}
        <div className="rg_t_img1">
          <img src={img1} alt="" />
        </div>
        {/* FORM */}
        <form className="rg_t_form">
          <h2>Registra a tu equipo</h2>
          <p className="rg_t_sbt">Regístrate para continuar</p>

          <div className="rg_t_nombre">
            <p>Nombre del Equipo</p>
            <input type="text" placeholder="Nombre del equipo"/>
          </div>
          <div className="rg_t_coach">
            <p>Nombre del Entrenador</p>
            <input type="text" placeholder="Nombre del entrenador"/>
          </div>
          <div className="rg_t_logo">
            <p>Ingresa el logo del equipo 🏀</p>
            <label for="imagen">Seleccionar imagen:</label>
            <input type="file"></input>
            <input type="submit" value="Subir Imagen" className="btn2"></input>
          </div>
          <div className="rg_t_btn">
            <button>Registrar</button>
          </div>
        </form>
        {/* IMG DERECHA */}
        <div className="rg_t_img2">
          <img src={img2} alt="" />
        </div>
      </div>
    </>
  );
};
