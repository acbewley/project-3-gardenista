import React from 'react';
import './style.css'

export function WeatherDiv({ children }) {
  return (
    <div className="weather-div" style={{ marginTop: '90px' }}>
      {children}
    </div>
  )
}

export function WeatherCard(props) {
  console.log(props)
  if (props.data.length > 0) {
    return (
      <div className='row'>
        {props.data.slice(0, 5).map(day => (
          <div className="card col" style={{ margin: '20px', width: "100px", backgroundColor: "#A3C586" }}>
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: '12pt' }}>{new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</h5>
              <p className="card-text" style={{ fontSize: '9pt' }}>Temperature: {day.temp.day}°</p>
              <p className="card-text" style={{ fontSize: '9pt' }}>Humidity: {day.humidity}%</p>
              <p className="card-text" style={{ fontSize: '9pt' }}>Chance of rain: {day.pop}%</p>
            </div>
          </div>
        ))}
      </div>
    )
  } else {
    return (
      <h3 style={{ textAlign: 'center', padding: '123px' }}>Loading weather...</h3>
    )
  }
}