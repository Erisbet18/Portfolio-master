import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/img10.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             DÉJAME <span className="purple"> Presentarme </span>
            </h1>
            <p className="home-about-body">
              Me enamoré de la programación y al menos he aprendido algo, creo… 🤷‍♂️
              <br />
              <br />soy muy eficiente.
              <i>
                <b className="purple">  Javascript . </b>
              </i>
              <br />
              <br />
             Mi campo de interés es construir nuevos &nbsp ;
              <i>
                <b className="purple">Tecnologías y productos web </b> y también en áreas relacionadas con{" "}
                <b className="purple">
                  Cadena de bloques.
                </b>
              </i>
              <br />
              <br />
              Siempre que puedo, también aplico mi pasión por desarrollar productos con<b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Biblioteca y marcos de trabajo de Javascript modernos
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="img.png">
            <Tilt>
              <img src={myImg} className="img.img" alt="img.png" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUENTRAME EN</h1>
            <p>
             Siéntete libre de <span className="purple">conectar </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Erisbet18"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/Erisbet18"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/Erisbet18/calculadora-simple"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/Erisbet18"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
