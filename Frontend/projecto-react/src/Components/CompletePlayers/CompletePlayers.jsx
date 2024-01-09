import React from "react";
import "./CompletePlayers.css";
import { Head } from "../Head/Head";
import img from "./Imgs/img.png";

export const CompletePlayers = () => {
  return (
    <>
      <Head />
      <div className="a">

        <div className="cp_container_table">
          <div className="cp_logo">
            <div className="cp_logo_img">
              <img src={img} alt="img" />
            </div>
            <div className="cp_logo_text">
              <p>Equipo: Faraday Sharks</p>
              <p>Coach: Mauricio Aguilar</p>
            </div>
          </div>
          <div className="cp_container">
            <table>
              <thead>
                <tr>
                  <th>N° de Jugadores</th>
                  <th>DNI</th>
                  <th>Nombres</th>
                  <th>Apellidos</th>
                  <th>N° de Camiseta</th>
                  <th>Altura</th>
                  <th>Peso</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>1234567</td>
                  <td>Carlos</td>
                  <td>Chavez</td>
                  <td>08</td>
                  <td>1.90</td>
                  <td>185kg</td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>1234567</td>
                  <td>Jose</td>
                  <td>Vasquez</td>
                  <td>02</td>
                  <td>1.86</td>
                  <td>155kg</td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>1234567</td>
                  <td>Mario</td>
                  <td>Matias</td>
                  <td>01</td>
                  <td>1.95</td>
                  <td>160kg</td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>1234567</td>
                  <td>Jorge</td>
                  <td>Alvarado</td>
                  <td>04</td>
                  <td>1.90</td>
                  <td>182kg</td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>1234567</td>
                  <td>Andres</td>
                  <td>Sono</td>
                  <td>03</td>
                  <td>1.90</td>
                  <td>185kg</td>
                </tr>
                <tr>
                  <td>06</td>
                  <td>1234567</td>
                  <td>Alexander</td>
                  <td>Acha</td>
                  <td>05</td>
                  <td>1.88</td>
                  <td>181kg</td>
                </tr>
                <tr>
                  <td>07</td>
                  <td>1234567</td>
                  <td>Adrian</td>
                  <td>Cortez</td>
                  <td>06</td>
                  <td>1.89</td>
                  <td>179kg</td>
                </tr>
                <tr>
                  <td>08</td>
                  <td>1234567</td>
                  <td>Jhonny</td>
                  <td>Medrano</td>
                  <td>07</td>
                  <td>1.91</td>
                  <td>172kg</td>
                </tr>
                <tr>
                  <td>09</td>
                  <td>1234567</td>
                  <td>Moises</td>
                  <td>Vargas</td>
                  <td>11</td>
                  <td>1.89</td>
                  <td>182kg</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>1234567</td>
                  <td>Paul</td>
                  <td>Castillo</td>
                  <td>09</td>
                  <td>1.91</td>
                  <td>192kg</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>1234567</td>
                  <td>Pedro</td>
                  <td>Quispe</td>
                  <td>10</td>
                  <td>1.90</td>
                  <td>185kg</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>1234567</td>
                  <td>Jorge</td>
                  <td>Loaiza</td>
                  <td>12</td>
                  <td>1.92</td>
                  <td>186kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
    </>
  );
};
