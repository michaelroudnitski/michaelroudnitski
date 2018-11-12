import React from "react";
import Fade from "react-reveal/Fade";
import Typist from 'react-typist';
import Train from "../Train/Train";
import style from "./Home.scss";
import coder from "../../../img/coder.svg";
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row full-height">
          <div className="box-1 col-lg-8 no-padding">
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
                <div className="content-container">
                  {/* <p className="name-subtitle">I like to build things, like this website which is still under construction</p> */}
                  <a>Github</a>
                  <a>LinkedIn</a>
                  <a>Email</a>
                </div>
              </div>
            </div>
          </div>
          <section className="col no-padding">
            <Fade right>
              <div className="box box-2">
                <Link to="/projects">
                  <h1>Projects</h1>
                </Link>
              </div>
              <div className="box box-3">
                <Link to="/projects">
                  <h1>Contact</h1>
                </Link>
              </div>
            </Fade>
          </section>
        </div>
      </div>
    )
  }
}