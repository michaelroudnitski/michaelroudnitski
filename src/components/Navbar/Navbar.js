import React from "react";
import style from "./Navbar.css";
import { DrawerToggleButton } from "../SideDrawer/DrawerToggleButton";

export default class Navbar extends React.Component {
  render() {
    return (
      <header className="toolbar">
        <nav className="toolbar-navigation">
          <div>
            <DrawerToggleButton id="drawer-toggle-btn" />
          </div>
          <div className="spacer"></div>
          <div className="toolbar-nav-items">
            <ul>
              <li><a href="/">PROJECTS</a></li>
              <li><a href="/">CONTACT</a></li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}