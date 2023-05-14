import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Oumaima NEJJARI </span>
            from <span className="purple"> Morocco.</span>
            <br />I am a junior Front-End Developer.
            <br />
            <br />
            Apart from being a coding lover, here are some other activities that I am passionate about :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Footbal Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "It's never too late to dream!"{" "}
          </p>
          <footer className="blockquote-footer">Aima</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
