import React, { Component } from "react";
// import PlantHeader from "../components/PlantHeader"
// import AddButton from "../components/PlantAdd"
import { Container, Row, Col } from "../components/Grid/index";
import API from "../utils/API"
import SaveList from "../components/SaveList"

class PlantCards extends Component {
  
  state = {
    savedPlants: []
  }

  componentDidMount = () => {
    this.getPlants()
  }

  getPlants = () => {
    API.getPlants()
    .then(res => {
        this.setState({
            savedPlants: res.data
        })
        console.log("This is the res from getPlants", res);
    })
    .catch(err => {
        console.log("This is the error", err);
    })
}


  render () {
    return (
      <div>
          <Container fluid>
          {this.state.savedPlants.length ? (
              <SaveList 
              bookState={this.state.savedPlants}
              >
              </SaveList>
          ) : (
              <h5>No results to display</h5>
          )}
          </Container>
      </div>
  )
  }

}

export default PlantCards;
