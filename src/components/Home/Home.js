import React from "react";
import Fade from "react-reveal/Fade";
import Typist from 'react-typist';
import Train from "../Train/Train";
import style from "./Home.scss";
import mountains from "../../../img/mountains.jpg";
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faJs, faJava, faPython, faHtml5, faCss3, faNode, faGit, faAndroid, } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faDatabase } from '@fortawesome/free-solid-svg-icons'

export default class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row no-margin full-height">
          <div className="box-1 col-lg-9 no-padding">
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
                <Link to="/projects">
                  <button className="btn btn-primary" id="projects-button"><h1>Projects</h1></button>
                </Link>
                <div className="contact-icon-container">
                  <a href="https://github.com/michaelroudnitski"><FontAwesomeIcon icon={faGithub} /></a>
                  <a href="https://www.linkedin.com/in/michael-roudnitski/"><FontAwesomeIcon icon={faLinkedin} /></a>
                  <a href="mailto:michaelroudnitski@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                </div>
              </div>
            </div>
          </div>
          <section className="col no-padding">
            <Fade Fade>
              <div className="box box-2 col">
                <Link to="/about">
                  <h1 className="row justify-content-center">About Me</h1>
                </Link>
                <br />
                <p className="row justify-content-md-center">
                  I'm in my 2nd year of Computer Science at York University in Toronto, Canada and expect to graduate in 2021.
                </p>
                <p className="row justify-content-md-center inline">
                  When I'm not studying I'm building beautiful and easy to use web interfaces
                  as well as scalable back end cloud solutions for{' '}
                  <a href="https://www.completelymanaged.com/" className="inline">Completely Managed</a>.
                </p>
              </div>
            </Fade>
            <Fade>
              <div className="box box-3 col">
                <h1 className="row justify-content-center">Skills</h1>
                <div className="row align-items-center">
                  <div className="col">
                    <FontAwesomeIcon icon={faJs} title="JavaScript" />
                  </div>
                  <div className="col">
                    <FontAwesomeIcon icon={faPython} title="Python" />
                  </div>
                  <div className="col">
                    <FontAwesomeIcon icon={faJava} title="Java" />
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col">
                    <FontAwesomeIcon icon={faNode} title="NodeJS" />
                  </div>
                  <div className="col">
                    <FontAwesomeIcon icon={faHtml5} title="HTML5" />
                  </div>
                  <div className="col">
                    <FontAwesomeIcon icon={faCss3} title="CSS3" />
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col">
                    <FontAwesomeIcon icon={faAndroid} title="Android" />
                  </div>
                  <div className="col">
                    <FontAwesomeIcon icon={faGit} title="Git" />
                  </div>
                  <div className="col">
                    <FontAwesomeIcon icon={faDatabase} title="SQL" />
                  </div>
                </div>
              </div>
            </Fade>
          </section>
        </div>
      </div >
    )
  }
}