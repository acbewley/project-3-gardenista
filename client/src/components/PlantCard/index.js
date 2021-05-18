import React from "react";
import "../PlantCard/style.css"

export function PlantCard({
    name,
    scientific_name,
    image,
    description
}) {
    return (
    <div class="plant-card">
        <img class="card-img-top" src={image} alt="Card cap"></img>
        <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{scientific_name}</h6>
            <p class="card-text">{description}</p>
        </div> 
        </div>
)
}

export default PlantCard;