import React, { Component } from 'react';
import PlantCard from "../PlantCard"

class SaveList extends Component {

    render() {
        console.log("Props", this.props.plantState);
        return (
            this.props.plantState.map((plant) =>
            <PlantCard 
            key={plant._id}
            id={plant._id}
            name={plant.name}
            botanical_name={plant.botanical_name}
            height={plant.height}
            usda_zones={plant.usda_zones}
            image={plant.image}
            description={plant.description}
            />
            )
        )
    }
}

export default SaveList;