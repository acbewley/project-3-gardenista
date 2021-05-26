import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Container } from "../components/Grid/index";
import AllCards from "../components/AllCards";
import { useUserContext } from "../utils/globalState";

function PlantsAll() {
  const [allPlants, setAllPlants] = useState([]);
  const [state] = useUserContext();

  useEffect(() => {
    loadPlant();
    // authenticate();
  }, [state]);

  function authenticate() {
    // if (!isLoggin) {
    //     window.location.pathname = '/'
    // }
  }
  const user = localStorage.getItem("user");

  function loadPlant() {
    API.getPlants()
      .then((res) => setAllPlants(res.data))

      .catch((err) => console.log(err));
  }

  function savePlant(currentPlant) {
    console.log("This is the current plant", currentPlant);

    API.updateUserPlant(user, {
      id: currentPlant.id,
      name: currentPlant.name,
      botanical_name: currentPlant.botanical_name,
      height: currentPlant.height,
      usda_zones: currentPlant.usda_zones,
      image: currentPlant.image,
      description: currentPlant.description,
      next_water: ''
    })
      .then((res) => console.log("Successful POST to DB!", res))
      .catch((err) => console.log("this is the error", err));
  }

  return (
    <div>
      <Container>
        {allPlants.length ? (
          <AllCards plantState={allPlants} savePlant={savePlant}></AllCards>
        ) : (
          <div>
            <hr />
            <p style={{ fontStyle: "italic" }}>No results to display</p>
          </div>
        )}
      </Container>
    </div>
  );
}

export default PlantsAll;
