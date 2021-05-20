import React, { useState, useEffect } from "react";
// import PlantHeader from "../components/PlantHeader"
// import AddButton from "../components/PlantAdd"
import { Container, Row, Col } from "../components/Grid/index";
import API from "../utils/API"
import SaveList from "../components/SaveList"
import { useUserContext } from "../utils/globalState"

function PlantCards() {
  const [state, dispatch] = useUserContext()

  const [savedPlants, setSavedPlants] = useState([]);

  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    getUser();
    getPlants();
    authenticate();
  }, [state]);

  function getUser() {
    API.getUser(state.userId).then(res => {
      console.log(res)
      setCurrentUser([...currentUser, res.data.plants])
    })
  }

  function authenticate() {
    if (!state.isLoggin) {
      window.location.pathname = '/'
    }
  }

  function getPlants() {
    currentUser.plants.map(plant => (
      API.getPlant(plant._id)
        .then(res => {
          setSavedPlants([
            ...savedPlants,
            res.data
          ])
          console.log("This is the res from getPlants", res);
        })
        .catch(err => {
          console.log("This is the error", err);
        })
    ))

  }

  console.log(currentUser)

  return (
    <div>
      <Container fluid>
        {savedPlants.length ? (
          <SaveList
            plantState={savedPlants}
          >
          </SaveList>
        ) : (
          <h5>No results to display</h5>
        )}
      </Container>
    </div>
  )
}


export default PlantCards;
