import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mi reciente <strong className="purple">trabajo </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aquí hay algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="diseño">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="diseño"
              description="Diseñadora web creativa y detallista, especializada en crear sitios atractivos, funcionales y adaptables a todo tipo de dispositivos. Apasionada por el diseño centrado en el usuario, combina estética con funcionalidad para ofrecer experiencias digitales memorables."
              ghLink="https://vercel.com/fanny-erisbet-machuca-sanchezs-projects/calculadora-simple"
              demoLink="https://github.com/Erisbet18/calculadora-simple"
            />
          </Col>

          <Col md={4} className="Programacion">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Programacion web"
              description=" Next.js and Tailwind Css , react."
              ghLink="https://github.com/Erisbet18/calculadora-simple"
              demoLink="https://blogs.fanny-jit.tech/"
            />
          </Col>

          <Col md={4} className="Gestion de diseño web">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Gestion de diseño web"
              description="Elaboracion de paginas web con worpress"
              ghLink="https://github.com/Erisbet18/calculadora-simple"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="Animacion de graficos">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Animacion"
              description="Elaboracion de animacion de personajes."
              ghLink="https://github.com/Erisbet18/calculadora-simple"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="diseño grafico">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="diseño grafico"
              description="Elaboracion de revistas."
              ghLink="https://github.com/Erisbet18/calculadora-simple"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="Diseño web">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="clculadora simple"
              description="iimplementada con react."
              ghLink="https://github.com/Erisbet18/calculadora-simple"
              // demoLink="https://blogs.Fanny-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
