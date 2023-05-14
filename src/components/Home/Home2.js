import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.PNG";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              GET TO <span className="purple"> KNOW </span> WHO I AM 😊
            </h1>
            <p className="home-about-body">
              I fell in love with coding and I believe that in the last couple of months,
              I have learnt a lot of learnt many things.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> HTML, Javascript and CSS. </b>
              </i>
              <br />
              <br />
              <i>
                I am mostly interested in building
                <b className="purple">Web Technologies and Products </b> and
                also into{" "}
                <b className="purple">
                  UI/UX Design.
                </b>
              </i>
              <br />
              <br />
              Whenever I am free, I love to work on projects for developing products
              with <b className="purple">JavaScript</b> and its
              <i>
                <b className="purple">
                  {" "}
                  Modern Libraries and Frameworks
                </b>
              </i>
              &nbsp; such as
              <i>
                <b className="purple"> React.js and Angular</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">contact </span>me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/aima98"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/NejjariOumaima"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/oumaima-nejjari-375065171/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
