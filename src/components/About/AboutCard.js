import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos soy <span className="purple">Fanny Machuca Sanchez </span>
            de <span className="purple"> Celendin, Cajamarca.</span>
            <br />
            Actualmente soy estudiante de computaciòn e informatica
            <br />
            He completado el V ciclo (IPC) llevando 8 cursos.
            
            <br />
            <br />
            ¡Además de programar, hay otras actividades que me encanta hacer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar juegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Escribir blogs de tecnología
            </li>
            <li className="about-activity">
              <ImPointRight /> De viaje
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "¡Esforcémonos por construir cosas que marquen la diferencia!"{" "}
          </p>
          <footer className="blockquote-footer">Fanny</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
