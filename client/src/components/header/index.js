import React, { useEffect } from "react";
import { useUserContext } from "../../utils/globalState";
import img from "../../images/gardenista-3.png";
import API from "../../utils/API";
import { useHistory } from "react-router-dom";

const Header = () => {
  let isLoggin = true;
  const history = useHistory();

  function logOut() {
    API.logout()
      .then((response) => {
        isLoggin = response.data.logged_in;
        localStorage.setItem('isLoggin', false)
        localStorage.setItem('user', null)
        window.location.pathname = '/';
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  useEffect(() => {
    checkLogin();
  }, []);

  function checkLogin() {
    API.auth()
      .then((response) => {
        console.log(response)
        return response.data.logged_in;
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  function authenticate() {
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
