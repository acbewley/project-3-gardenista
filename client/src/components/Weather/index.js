import React from 'react';

const Weather = (props) => {
  return (
  <h1>{props.data.name}</h1>
  )
}

export default Weather;