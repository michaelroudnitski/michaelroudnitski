import React from "react";
import "./Policy.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faTimes } from "@fortawesome/free-solid-svg-icons";

const TabsPolicy = require("./tabs.js");

export default class Policy extends React.Component {
  render() {
    return (
      <div>
        <nav className="nav-bar">
          <div className="nav-content row justify-content-between">
            <Link to="/home">
              <h3 id="home-button">Home</h3>
            </Link>
            <div className="nav-right">
              <a className="dark" href="https://github.com/michaelroudnitski">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                className="dark"
                href="https://www.linkedin.com/in/michael-roudnitski/"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a className="dark" href="mailto:michaelroudnitski@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </nav>
        <div className="container">
          <TabsPolicy />
        </div>
      </div>
    );
  }
}
