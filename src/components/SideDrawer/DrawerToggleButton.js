import React from "react";

import style from "./DrawerToggleButton.css";

export const DrawerToggleButton = (props) => {
  return(
    <button className="toggle-button">
      <div className="toggle-button-line" />
      <div className="toggle-button-line" />
      <div className="toggle-button-line" />
    </button>
  )
}