import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I'm <span className="purple">Harshit Shah </span>
            from <span className="purple"> Mumbai, IN</span>
            <br />
            I'm a Freshman @ BITS Pilani
            I'm currently a working on a Capstone Project (AI & Deep Learning) @ <span className="purple"> The University of Oxford</span>
            <br />
            My hobbies apart from coding/solving problems:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Going to the gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A lot can happen over coffee!"{" "}
          </p>
          <footer className="blockquote-footer">Café Coffee Day</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
