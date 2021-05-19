import React, { useState, useEffect } from "react";
import API from "../utils/API"
import { Container, Row, Col } from "../components/Grid/index";
import AllCards from "../components/AllCards"

function PlantsAll() {
    const [allPlants, setAllPlants] = useState([]);

    useEffect(() => {
        loadPlant();
      }, []);

    function loadPlant() {
        API.getPlants()
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      }

    // savePlant = currentPlant => {
    //     console.log("This is the current plant", currentPlant);
    //     API.savePlant({
    //         id: currentPlant.id,
    //         name: currentPlant.name,
    //         botanical_name: currentPlant.botanical_name,
    //         height: currentPlant.height,
    //         usda_zones: currentPlant.usda_zones,
    //         image: currentPlant.image,
    //         description: currentPlant.description
    //     })
    //     .then(res => console.log("Successful POST to DB!", res))
    //     .catch(err => console.log("this is the error", err));
    // }
        return (
            <div>
                {/* <Container>
                {this.state.plants.length ? (
                    <AllCards 
                    plantState={this.state.plants}
                    savePlant={this.savePlant}>
                    </AllCards>
                ) : (
                    <div>
                        <hr/>
                    <p style={{fontStyle: "italic"}}>No results to display</p>
                    </div>
                )}
                </Container> */}
            </div>
        )
    }

export default PlantsAll;

