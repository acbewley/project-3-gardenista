import React, { useEffect, useState } from "react";
import { WeatherDiv, WeatherCard } from '../components/Weather';
import API from '../utils/API';
import { Container, Row, Col } from '../components/Grid';
import NeedWater from '../components/NeedWater';
import Divider from '../components/Divider';

function Home() {
  const [weather, setWeather] = useState([])
  const [timezoneOffset, setOffset] = useState(0)

  useEffect(() => {
    loadWeather()
  }, [])

  function loadWeather() {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      API.getWeather(lat, long)
        .then(res => {
          setWeather(res.data.daily)
          setOffset(res.data.timezone_offset)
          console.log(res)
        })
    })
  }

  return (
    <Container>
      <Row>
        <Col size="3">
          <p style={{ textAlign: "center", marginTop: "50px" }}>Welcome, (Username)!</p>
          <NeedWater>
            <div style={{ textAlign: "center" }}>(insert cards here)</div>
          </NeedWater>
        </Col>
        <Col size="1">
          <Divider />
        </Col>
        <Col size="8">
          <Row>
            <WeatherDiv>
              <WeatherCard
              data={weather}
              offset={timezoneOffset}
              />
            </WeatherDiv>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;
