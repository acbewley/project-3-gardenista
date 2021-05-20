import React, { useEffect, useState } from "react";
import { WeatherDiv, WeatherCard } from "../components/Weather";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import NeedWater from "../components/NeedWater";
import { useUserContext } from "../utils/globalState";

function Home() {
  const [weather, setWeather] = useState([]);
  const [state, dispatch] = useUserContext();

  useEffect(() => {
    authenticate()
    loadWeather()
  }, [state])

  function authenticate() {
    if (!state.isLoggin) {
      window.location.pathname = '/'
    }
  }

  function loadWeather() {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      API.getWeather(lat, long).then((res) => {
        setWeather(res.data.daily);
      });
    });
  }
  console.log(state)
  return (
    <Container>
      <Row>
        <Col size="md-4">
          <p style={{ textAlign: "center", marginTop: "50px" }}>
            Welcome, {state.username}!
          </p>
          <NeedWater>
            <div style={{ textAlign: "center" }}>(insert cards here)</div>
          </NeedWater>
        </Col>
        <Col size="md-8">
          <Row>
            <WeatherDiv>
              <WeatherCard data={weather} />
            </WeatherDiv>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
