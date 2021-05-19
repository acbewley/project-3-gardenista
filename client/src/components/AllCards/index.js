import React, { Component } from 'react'
import AllCardsItem from "../AllCardsItem";

class AllCards extends Component {
    render() {
        return (
            this.props.plantState.map((plant) =>
            <AllCardsItem
            key={plant._id}
            id={plant._id}
            name={plant.name}
            botanical_name={plant.botanical_name}
            height={plant.height}
            usda_zones={plant.usda_zones}
            image={plant.image}
            description={plant.description}
            savePlant={this.props.savePlant}
            />
            )
        )
    }
}
export default AllCards;