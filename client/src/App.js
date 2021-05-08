import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import PlantCards from './pages/PlantCards';
import Home from './pages/Home';
import Journal from "./pages/Journal";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cards" component={PlantCards} />
          <Route exact path="/journal" component={Journal} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
