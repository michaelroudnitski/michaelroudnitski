import React from "react";
import style from "./Navbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

export default class Navbar extends React.Component {
  render() {
    return (
      <header className="toolbar">
        <nav className="toolbar-navigation">
          <div>
            <DrawerToggleButton />
          </div>
          {/* <div className="toolbar-logo"><a href="/">LOGO</a></div> */}
          <div className="spacer"></div>
          <div className="toolbar-nav-items">
            <ul>
              <li><a href="/">projects</a></li>
              <li><a href="/">contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}