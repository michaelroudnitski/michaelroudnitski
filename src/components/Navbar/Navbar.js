import React from "react";
import style from "./Navbar.scss";
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default class Navbar extends React.Component {
  render() {
    return (
      <header className="toolbar">
        <nav className="toolbar-navigation">
          <ul className="nav justify-content-end">
            <Link to="/">
              <li className="nav-item">
                <span className="nav-link active">Home</span>
              </li>
            </Link>
          </ul>
          <div className="spacer"></div>
          <ul className="nav justify-content-end">
            <Link to="/projects">
              <li className="nav-item">
                <span className="nav-link">Projects</span>
              </li>
            </Link>
            <Link to="/contact">
              <li className="nav-item">
                <span className="nav-link">Contact</span>
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    )
  }
}