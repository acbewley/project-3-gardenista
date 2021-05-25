import React, { useState, useEffect } from "react";
// import PlantHeader from "../components/PlantHeader"
// import AddButton from "../components/PlantAdd"
import { Container, Row, Col } from "../components/Grid/index";
import API from "../utils/API";
import SaveList from "../components/SaveList";
import Sidebar from "../components/PlantSide"
import { useUserContext } from "../utils/globalState";

function PlantCards() {
  const [state, dispatch] = useUserContext()
  const [savedPlants, setSavedPlants] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const isLoggin = localStorage.getItem('isLoggin') === 'true';
  const user = localStorage.getItem('user')


  useEffect(() => {
    authenticate();
    getUser();
    // getPlants();
  }, [state]);

  function getUser() {
    API.getUser(user).then((res) => {
      setCurrentUser(res.data);
      setSavedPlants(res.data.plants);
    });
  }

  function authenticate() {
    if (!isLoggin) {
      window.location.pathname = '/'
    }
  }

  // function getPlants() {
  //   currentUser.plants.map(plant => (
  //     API.getPlant(plant._id)
  //       .then(res => {
  //         setSavedPlants([
  //           ...savedPlants,
  //           res.data
  //         ])
  //         console.log("This is the res from getPlants", res);
  //       })
  //       .catch(err => {
  //         console.log("This is the error", err);
  //       })
  //   ))

  // }

  console.log(currentUser);

  return (
    <div>
      <Container>
        <Row>
          <Col size="md-3">
            <div className = "side-style">
            <Sidebar />
            </div>
            
          </Col>
          <Col size="md-9">
            {savedPlants.length ? (
              <SaveList plantState={savedPlants}></SaveList>
            ) : (
              <h5>No results to display</h5>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PlantCards;
