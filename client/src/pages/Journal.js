import React from "react";
import { Container, Row, Col } from "../components/Grid/index";
import Entry from "../components/Entry";
// import entryList from "../components/entryList"

function Journal() {
  return (
    <Container>
      <Row>
        <Col size="md-3">Journal Entries</Col>
        <Col size="md-9">
          <Entry></Entry>
        </Col>
      </Row>
    </Container>
  );
}

export default Journal;
