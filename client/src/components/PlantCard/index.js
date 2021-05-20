import React from "react";
import "../PlantCard/style.css"

export function PlantCard(props) {
    const { name, botanical_name, height, usda_zones, image, description } = props
    return (
        <div>
            <div className="card">
                <div className="card-header"></div>
                <div className="card-body plant-card">
                    <img src={image} style={{ maxWidth: "100px" }} />
                    <h5 className="card-title">{name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{botanical_name}</h6>
                    <p class="card-text">Height: {height}</p>
                    <p class="card-text">USDA Zones: {usda_zones}</p>
                    <p class="card-text">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default PlantCard;