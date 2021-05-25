import React, { useEffect, useState } from "react";
import { WeatherDiv, WeatherCard } from "../components/Weather";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import NeedWater from "../components/NeedWater";
import { useUserContext } from "../utils/globalState";

function Home() {
  const [weather, setWeather] = useState([]);
  const [state] = useUserContext();
  let isLoggin = true;

  useEffect(() => {
    localStorage.setItem("isLoggin", true);
    isLoggin = localStorage.getItem("isLoggin") === "true";
    authenticate();
    initUser();
    loadWeather();
  }, [state]);

  function authenticate() {
    if (isLoggin != true) {
      window.location.pathname = "/";
    }
  }

  function initUser() {
    if (!localStorage.getItem("user")) {
      localStorage.setItem("user", state.userId);
    } else if (localStorage.getItem("user") === "undefined") {
      localStorage.setItem("user", state.userId);
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
  console.log(state);
  return (
    <Container>
      <div className="row mb-5">
        <div className="col-sm-12 col-md-12 col-lg-4 ">
          <p style={{ textAlign: "center", marginTop: "50px" }}>
            Welcome, {state.username}!
          </p>
          <NeedWater>
            <div style={{ textAlign: "center" }}>(insert cards here)</div>
          </NeedWater>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-8">
          <Row>
            <WeatherDiv>
              <WeatherCard data={weather} />
            </WeatherDiv>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default Home;
