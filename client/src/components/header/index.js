import React, { useEffect } from "react";
import { useUserContext } from "../../utils/globalState";
import img from "../../images/gardenista-3.png";
import { useHistory } from "react-router-dom";

const Header = () => {
  let isLoggin = localStorage.getItem("isLoggin") === "true";
  const history = useHistory();

  function logOut() {
    localStorage.setItem("isLoggin", false);
    localStorage.setItem("user", undefined);
    window.location.pathname = "/";
  }

  useEffect(() => {
    isLoggin = localStorage.getItem("isLoggin") === "true";
    toHome();
  });

  function toHome() {
    if (isLoggin) {
      history.push("/home");
    }
  }

  function authenticate() {
    console.log("woah");
    if (isLoggin) {
      return (
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#5b7444" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/home">
              <img src={img} alt="" width="75" height="93.75" />
            </a>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ color: "white" }}
                    href="/cards"
                  >
                    Your Plants
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ color: "white" }}
                    href="/plants"
                  >
                    Add Plants
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ color: "white" }}
                    href="/journal"
                  >
                    Journal
                  </a>
                </li>
              </ul>
              <span className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "white" }}
                  onClick={logOut}
                >
                  Log Out
                </a>
              </span>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#5b7444" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand">
              <img src={img} alt="" width="75" height="93.75" />
            </a>
          </div>
        </nav>
      );
    }
  }

  return authenticate();
};

export default Header;
