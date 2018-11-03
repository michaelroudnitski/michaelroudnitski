import React from "react";
import style from "./Navbar.scss";

export default class Navbar extends React.Component {
  render() {
    return (
      <header className="toolbar">
        <nav className="toolbar-navigation">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
          </ul>
          <div className="spacer"></div>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}