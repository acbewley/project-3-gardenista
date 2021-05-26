import React from 'react';
import './style.css'

export function NeedWater({ children }) {
  return (
    <div className="needs-water">
      {children}
    </div>
  )
}

export function WaterCard(props) {
  console.log(props.data)
  return (
    <div>
      {props.data.map((plant) => {
        return (<div>
          <div className="card">
            <div className="card-body plant-card">
              <img src={plant.image} style={{ maxWidth: "100px" }} />
              <h5 className="card-title">{plant.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{plant.botanical_name}</h6>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  )
}