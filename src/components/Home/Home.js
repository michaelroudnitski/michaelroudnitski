import React from "react";
import Fade from "react-reveal/Fade";
import Typist from 'react-typist';
import Train from "../Train/Train";
import style from "./Home.scss";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="content-box box-1">
          <div id="name-container">
            <div>
              <h1 className="pre-name">Hi, my name is</h1>
              <h1 className="name-title">
                <Typist startDelay={500} cursor={{ hideWhenDone: true, hideWhenDoneDelay: 400 }} >
                  <span>Slim Shady</span>
                  <Typist.Backspace count={10} delay={200} />
                  <span>Michael Roudnitski</span>
                </Typist>
              </h1>
              {/* <Train /> */}
              {/* <div className="content-container">
                <p className="name-subtitle">I like to build things, like this website which is still under construction</p>
              </div> */}
            </div>
          </div>
        </div>
        <section className="content-container">
          <Fade left>
            <content className="content-box box-2">
            </content>
          </Fade>
          <Fade right>
            <content className="content-box box-3">
            </content>
          </Fade>
        </section>
      </div>
    )
  }
}