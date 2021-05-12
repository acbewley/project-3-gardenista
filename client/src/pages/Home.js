import React, { useEffect, useState } from "react";
import Weather from '../components/Weather';
import API from '../utils/API';

function Home() {
  const [weather, setWeather] = useState([])

  useEffect(() => {
    loadWeather()
  }, [])

  function loadWeather() {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      API.getWeather(lat, long)
        .then(res => {
          setWeather(res.data) 
          console.log(res)})
    })
  }

  return (
    <div>
      <h1>test</h1>
      <Weather
      data={weather}
      />
    </div>
  )
}

export default Home;
