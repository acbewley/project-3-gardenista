import React, { useState } from 'react';

function AllCardsItem (props) {    
    const {image, name, botanical_name, height, usda_zones, description} = props
    const [state, setState] = useState({ 
        bgColor: "",
        color: "",
        text: "Save"
     })

    const getStyle = () => {
        if (state.text === "Save") {
            setState({
                bgColor: "#00E000",
                color: "white",
                text: "Saved"
            })
        }
        else {
            setState({
                bgColor: "",
                color: "",
                text: "Save"
            })
        }
    }

    const onClickFunction = () => {
        props.savePlant(props)
        getStyle();
    }
    
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
                        <button onClick={onClickFunction} style={{ backgroundColor: state.bgColor, color: state.color }} className="btn">{state.text}</button>
                    </div>
                </div>
            </div>
        )}

export default AllCardsItem