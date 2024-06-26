import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My Github <strong className="purple">Commit Calendar</strong>
      </h1>
      <GitHubCalendar
        username="harshit4311"
        blockSize={15}
        blockMargin={5}
        color="lightgreen"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
