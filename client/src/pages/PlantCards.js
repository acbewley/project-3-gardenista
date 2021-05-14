import React from "react";
import PlantCard from "../components/PlantCard"
import PlantHeader from "../components/PlantHeader"
import { Container, Row, Col } from "../components/Grid/index";



function PlantCards() {

  return <Container>
    <Row>
      <PlantHeader></PlantHeader>
    </Row>
    <Row>
      <Col size="md-6">
        <PlantCard name="test" scientific_name="testing" image="https://www.calloways.com/wp-content/uploads/sarah-bernhardt-peony-0773401189-01.jpg" description="put description here" />
      </Col>
      <Col size="md-6">
      <PlantCard name="test" scientific_name="testing" image="https://www.calloways.com/wp-content/uploads/sarah-bernhardt-peony-0773401189-01.jpg" description="put description here" />
      </Col>
    </Row>
    <Row>
      <Col size="md-6">
        <PlantCard name="test" scientific_name="testing" image="https://www.calloways.com/wp-content/uploads/sarah-bernhardt-peony-0773401189-01.jpg" description="put description here" />
      </Col>
      <Col size="md-6">
      <PlantCard name="test" scientific_name="testing" image="https://www.calloways.com/wp-content/uploads/sarah-bernhardt-peony-0773401189-01.jpg" description="put description here" />
      </Col>
    </Row>

  </Container>
}

export default PlantCards;