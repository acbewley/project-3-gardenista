import React from 'react';
import { useUserContext } from "../../utils/globalState";
import img from '../../images/gardenista-3.png';

const Header = () => {
  const [state] = useUserContext();

  if (state.isLoggin) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#5b7444" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            <img src={img} alt="" width="75" height="93.75" />
          </a>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" style={{ color: "white" }} href="/cards">Your Plants</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style={{ color: "white" }} href="/plants">Add Plants</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style={{ color: "white" }} href="/journal">Journal</a>
              </li>
            </ul>
            <span class="navbar-text">
              <a class="nav-link" style={{ color: "white" }} href="/">Log Out</a>
            </span>
          </div>
        </div>
      </nav>
    )
  } else {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#5b7444" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            <img src={img} alt="" width="75" height="93.75" />
          </a>
        </div>
      </nav>
    )
  }


}

export default Header;