import React from "react";
import plantCard from "../components/PlantCard/index"
import { Container, Row, Col } from "../components/Grid/index";



function PlantCards() {
  return <Container>
    <Row>
      <Col size="md-6">
        <plantCard>
          Test
        </plantCard>
      </Col>
      <Col size="md-6">
        <plantCard>
          Test
        </plantCard>
      </Col>
    </Row>
  </Container>
}

export default PlantCards;