import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/index";
import Header from "./components/Header/index";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Journal from "./pages/Journal";
import PlantCards from "./pages/PlantCards";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/journal" component={Journal} />
          <Route exact path="/cards" component={PlantCards} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
