import React from "react";
import Fade from "react-reveal/Fade";
import Train from "../Train/Train";
import style from "./Home.css";
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <section className="content-box box-1">
          <div id="name-container">
            <Fade right cascade>
              <div>
                <h1 className="pre-name">hi, my name is:</h1>
                <h1 className="name-title">>Michael Roudnitski</h1>
                <Train />
                <p className="name-subtitle">I like to build things</p>
              </div>
            </Fade>
          </div>
        </section>
        <Fade>
          <section className="content-box box-2">
          </section>
        </Fade>
        <Fade>
          <section className="content-box box-3">
          </section>
        </Fade>
      </div>
    )
  }
}