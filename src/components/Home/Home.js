import React from "react";
import Fade from "react-reveal/Fade";
import Typist from 'react-typist';
import Train from "../Train/Train";
import style from "./Home.scss";
import coder from "../../../img/coder.svg";
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Particles from 'react-particles-js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row no-margin full-height">
          <div className="box-1 col-lg-8 no-padding">
            <Particles
              params={{
                particles: {
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "rgb(255, 87, 51)",
                      blur: 10
                    }
                  }
                }
              }}
              style={{
                width: '100%',
                zIndex: '-1',
                position: 'absolute'
              }}
            />
            <div id="name-container">
              <div>
                <h1 className="pre-name">Hi, my name is</h1>
                <h1 className="name-title">
                  <Typist startDelay={1000} cursor={{ show: false }} >
                    <span>Slim Shady</span>
                    <Typist.Backspace count={10} delay={200} />
                    <span>Michael Roudnitski</span>
                  </Typist>
                </h1>
                <div className="contact-icon-container">
                  <a href="https://github.com/michaelroudnitski"><FontAwesomeIcon icon={faGithub} /></a>
                  <a href="https://www.linkedin.com/in/michael-roudnitski/"><FontAwesomeIcon icon={faLinkedin} /></a>
                  <a href="mailto:michaelroudnitski@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                </div>
              </div>
            </div>
          </div>
          <section className="col no-padding">
            <Fade top delay={300}>
              <div className="box box-2 col">
                {/* <FontAwesomeIcon icon={faUser} className="faded-background-icon" /> */}
                <Link to="/about">
                  <h1 className="row justify-content-center colored-link">About Me</h1>
                </Link>
                <br />
                <p className="row justify-content-md-center">
                  I'm in my 2nd year of Computer Science at York University in Toronto, Canada.
                </p>
                <p className="row justify-content-md-center inline">
                  When I'm not studying I'm building beautiful and easy to use web interfaces
                  as well as scalable back end cloud solutions for{' '}
                  <a href="https://www.completelymanaged.com/" className="inline colored">Completely Managed</a>.
                </p>
              </div>
            </Fade>
            <Fade bottom delay={300}>
              <div className="box box-3 col">
                {/* <FontAwesomeIcon icon={faCode} className="faded-background-icon" /> */}
                <Link to="/projects">
                  <h1 className="row justify-content-center colored-link">Projects</h1>
                </Link>
              </div>
            </Fade>
          </section>
        </div>
      </div >
    )
  }
}