import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bookstore from "../../Assets/Projects/bookstore.PNG";
import math from "../../Assets/Projects/MathMagicians.PNG";
import todo from "../../Assets/Projects/TodoAppWeb.PNG";
import concert from "../../Assets/Projects/Concert.PNG";
import restaurant from "../../Assets/Projects/ResWeb.PNG";
import books from "../../Assets/Projects/AwesomeBooksWeb.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          I listed below some of the projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={concert}
              isBlog={false}
              title="Concert Website"
              description="Responsive website for a concert, from Mobile to desktop. This project was inspired by CC-Global-Summit-2015 website published in https://www.behance.net/ gallery."
              ghLink="https://github.com/aima98/Concert-Website"
              demoLink="https://aima98.github.io/Concert-Website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="Restaurant App"
              description="Restaurant App is a responsive website and an optimized food webapp that contains two interfaces and which displays different meals , interactive likes and comments for each particular item."
              ghLink="https://github.com/aima98/Javascript-Capstone-Project"
              demoLink="https://aima98.github.io/Javascript-Capstone-Project/dist/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="Bookstore"
              description="Bookstore is an app that allows the user to go through a list of books, add a new book and remove a book. It was built using React and Redux (state management)."
              ghLink="https://github.com/aima98/Bookstore"
              demoLink="https://bookstore-qgi5.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-Do List App"
              description="Todo-App is a simple webpage that helps users manage their daily task, you can list, add and remove todo items. It was built with React"
              ghLink="https://github.com/aima98/React-ToDoList"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={books}
              isBlog={false}
              title="Awesome Books"
              description="Awesome books is a single-page web application that keeps track of books. Book details captured are the book title, author, and ISBN. Users can remove a book, add a new one, or view a list of books."
              ghLink="https://github.com/aima98/Awesome-Books-ES6"
              demoLink="https://aima98.github.io/Awesome-Books-ES6/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={math}
              isBlog={false}
              title="Math Magicians"
              description="Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations or read random math-related quote."
              ghLink="https://github.com/aima98/Math-Magicians"
              demoLink="https://math-magician-wen0.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
