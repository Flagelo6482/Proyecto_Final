import React from "react";
import "./Login.css";
import { Head } from "../Head/Head";
import img1 from "./Imgs/img1.png";
import img2 from "./Imgs/img2.png";

export const Login = () => {
  return (
    <>
      <Head />
      {/* LOGIN */}
      <div className="log_contenedor">
        {/* IMAGEN IZQUIERDA */}
        <div className="log_img1">
          <img src={img1} alt="" />
        </div>


        {/* FORMULARIO */}
        <form className="log_form">
            <h2>Hola administrador</h2>
            <p className="ttl2">Iniciar sesión para continuar</p>
            
            <div className="log_email">
                <p className="log_1">Correo electrónico</p>
                <input type="email" placeholder="Introduce tu correo electrónico"/>
            </div>
            <div className="log_password">
                <p>Contraseña</p>
                <input type="password" placeholder="Introduce la contraseña"/>
            </div>
            <div className="log_btn">
              <button className="log_iniciar">Iniciar sesión</button>
            </div>
            <div className="log_rgs">
              <p>¿No tienes una cuenta?</p>
              <a href="#">Registrate</a>
            </div>
        </form>


        {/* IMAGEN DERECHA */}
        <div className="log_img2">
          <img src={img2} alt="" />
        </div>
      </div>
    </>
  );
};
