import React from "react";
import { Head } from "../Head/Head";
import "./Register.css";
import img1 from "./Imgs/img1.png";
import img2 from "./Imgs/img2.png";

export const Register = () => {
  return (
    <>
      <Head />
      {/* REGISTRARSE */}
      <div className="reg_contenedor">
        {/* IMAGEN IZQUIERDA */}
        <div className="reg_img1">
          <img src={img1} alt="" />
        </div>
        {/* FORMULARIO */}
        <form className="reg_from">
            <h2>Crea  un administrador de la Copa</h2>
            <p className="reg_ttl1">Regístrate para continuar</p>

            <div className="reg_nombres">
                <p>Nombres</p>
                <input type="text" placeholder="Nombres completo"/>
            </div>
            <div className="reg_apellido">
                <p>Apellidos</p>
                <input type="text" placeholder="Apellidos completos"/>
            </div>
            <div className="reg_email">
                <p>Correo electrónico</p>
                <input type="email" placeholder="Introduce tu correo electrónico"/>
            </div>
            <div className="reg_password">
                <p>Contraseña</p>
                <input type="password" placeholder="Introduce la contraseña"/>
            </div>
            <div className="reg_btn">
                <button>Registrarse</button>
            </div>
            <div className="reg_login">
                <p>¿Ya tienes una cuenta?</p>
                <a href="#">Iniciar Sesión</a>
            </div>
        </form>
        {/* IMAGEN DERECHA */}
        <div className="reg_img2">
          <img src={img2} alt="" />
        </div>
      </div>
    </>
  );
};
