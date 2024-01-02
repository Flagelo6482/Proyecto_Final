import React from "react";
import img1 from "../../Assets/images/Jugadores/foto_p.png";
import img2 from "../../Assets/images/Jugadores/img_2.png";
import imgs1 from "./imgs/img1.png";
import imgs2 from "./imgs/img2.png";
import imgs3 from "./imgs/img3.png";
import imgs4 from "./imgs/img4.png";
import sec1 from "./imgs/sec_1.png";
import sec2 from "./imgs/sec_2.png";
import sec3 from "./imgs/sec_3.png";
import p1 from "./imgs/p_1.png";
import p2 from "./imgs/p_2.png"
import p3 from "./imgs/p_3.png"
import p4 from "./imgs/p_4.png"
import p5 from "./imgs/p_5.png"
import "./News.css";

export const News = () => {
  return (
    <>
      <div className="nws_t">
        <div className="nws_contenedor">
          <div className="nws_titulo">
            <h1>Latest news of the day 🏀!!!</h1>

            <div className="nws_relleno">
              <img src={img1} alt="img" className="nw_img" />
              <p className="nws_p">
                In an exciting basketball competition, an extraordinary team
                stood out like a true giant on the court. From the start of the
                tournament, this team displayed a unique combination of skills,
                determination and camaraderie that took them to the top of the
                competition. From the first game, it was clear that this team
                was destined for great things. Their offense was unstoppable,
                with coordinated plays and precise shots that left their
                opponents speechless. The defense, on the other hand, was an
                impenetrable fortress that challenged any opposing team to try
                to score. The players shared a special connection both on and
                off the court.
              </p>
            </div>
          </div>

          <div className="nws_titulo_abajo">
            <p className="nws_p_a">
              With each match, the team accumulated victories in impressive
              fashion. Their style of play captivated spectators, creating a
              passionate fan base that admired the excellence of this formidable
              team. Fans were thrilled to witness the magic on the court, where
              every pass, every block and every basket contributed to the
              narrative of a team destined for greatness. As they progressed
              through the tournament, the team demonstrated an unbeatable
              mentality. They overcame challenges with determination, remaining
              calm under pressure and responding masterfully to any strategy
              their opponents attempted to deploy. Each game became a spectacle
              filled with excitement and anticipation, with fans eagerly waiting
              to see how their favorite team would continue to leave its mark on
              basketball history.
            </p>
            <img src={img2} alt="img" className="nw_img_2" />
          </div>

          <div className="nws_seccion_1">
            <h2>Latest results 🏅🏆🏀</h2>

            <div className="nws_imgs">
              <img src={imgs1} alt="img" />
              <img src={imgs2} alt="img" />
              <img src={imgs3} alt="img" />
              <img src={imgs4} alt="img" />
            </div>

            <div className="nws_text">
              <p>
                Winner🏆:{" "}
                <span className="p1">Club Internacional Arequipa ✨</span>
              </p>
              <p>
                Winner🏆: <span className="p2">Faraday Sharks 🦈</span>
              </p>
              <p>
                Winner🏆: <span className="p3">Faraday Sharks 🦈</span>
              </p>
              <p>
                Winner🏆: <span className="p4">Erres 🏅</span>
              </p>
            </div>
          </div>

          <div className="nws_seccion_2">
            <h2>Featured players 🥇✨</h2>

            <div className="nws_sec_imgs">
              <img src={sec1} alt="img" />
              <img src={sec2} alt="img" />
              <img src={sec3} alt="img" />
            </div>
          </div>
        </div>
      </div>

      <div className="nws_seccion_3">
        <div className="nws_sec_3_p">
          <div className="nws_sec_t_1">
            <h2>Photos of the Date 🏀📸</h2>
          </div>

          <div className="nws_sec_fotos_1">
            <p>
              Lorem astu Lorem astu Lorem astu Lorem astu Lorem astu Lorem astu
              Lorem astu Lorem astu Lorem astu Lorem astu Lorem astu Lorem astu
              Lorem astu Lorem astu Lorem astu.
            </p>
            <img src={p1} alt="img" />
          </div>

          <div className="nws_sec_fotos_2">
            <div className="nws_f_2">
              <img src={p2} alt="img" />
              <img src={p3} alt="img" />
              <img src={p4} alt="img" />
              <img src={p5} alt="img" />
            </div>
            <div className="nws_p_2">
              <p>Lorem astu</p>
              <p>Lorem astu</p>
              <p>Lorem astu</p>
              <p>Lorem astu</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
