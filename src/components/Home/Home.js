import React from "react";
import Fade from "react-reveal/Fade";
import style from "./Home.css";

import skylineImg from "../../../img/skyline.jpg";
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="name-container">
          <Fade left>
            <h1 className="name-title">MICHAEL<br />ROUDNITSKI</h1>
          </Fade>
        </div>
        <Fade>
          <div className="content-box box-1">
          </div>
        </Fade>
        <Fade>
          <div className="content-box box-2">
          </div>
        </Fade>
        <Fade>
          <div className="content-box box-3">
          </div>
        </Fade>
      </div>
    )
  }
}