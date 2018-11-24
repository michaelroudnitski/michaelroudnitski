import React from "react";
import Fade from "react-reveal/Fade";
import Typist from 'react-typist';
import style from "./Home.scss";
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faJs, faJava, faPython, faHtml5, faCss3, faNode, faGit, faAndroid, faAngular } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { skill: "Skills" };
    this.highlightSkill = this.highlightSkill.bind(this);
  }

  highlightSkill(skill) {
    this.setState(state => ({ skill }));
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row no-margin full-height">
          <div className="box-1 col-lg-8">
            <div>
              <h1 className="pre-name">Hi, my name is</h1>
              <h1 className="name-title">
                <Typist startDelay={1000} cursor={{ show: false }} >
                  <span>Slim Shady</span>
                  <Typist.Backspace count={10} delay={200} />
                  <span>Michael Roudnitski</span>
                </Typist>
              </h1>
            </div>
            <Link to="/projects">
              <button className="btn btn-primary" id="projects-button"><h1>Projects</h1></button>
            </Link>
            <div className="contact-icon-container">
              <a href="https://github.com/michaelroudnitski"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://www.linkedin.com/in/michael-roudnitski/"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="mailto:michaelroudnitski@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
          </div>
          <section className="col no-padding">
            <Fade>
              <div className="box box-2 col">
                <h1 className="row justify-content-center">About Me</h1>
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
              <div className="box box-3 col" onMouseLeave={() => this.highlightSkill("Skills")}>
                <h1 className="row justify-content-center">{this.state.skill}</h1>
                <div className="row align-items-center">
                  <div className="col">
                    <FontAwesomeIcon icon={faJs} title="JavaScript" onMouseEnter={() => this.highlightSkill("JavaScript")} />
                  </div>
                  <div className="col">
                    <FontAwesomeIcon icon={faPython} title="Python" onMouseEnter={() => this.highlightSkill("Python")} />
                  </div>
                  <div className="col">
                    <FontAwesomeIcon icon={faJava} title="Java" onMouseEnter={() => this.highlightSkill("Java")} />
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col">
                    <FontAwesomeIcon icon={faGit} title="Git" onMouseEnter={() => this.highlightSkill("Git")} />
                  </div>
                  <div className="col">
                    <FontAwesomeIcon icon={faHtml5} title="HTML5" onMouseEnter={() => this.highlightSkill("HTML5")} />
                  </div>
                  <div className="col">
                    <FontAwesomeIcon icon={faCss3} title="CSS3" onMouseEnter={() => this.highlightSkill("CSS3")} />
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col">
                    <FontAwesomeIcon icon={faAngular} title="faAngular" onMouseEnter={() => this.highlightSkill("Angular")} />
                  </div>
                  <div className="col">
                    <FontAwesomeIcon icon={faAndroid} title="Android" onMouseEnter={() => this.highlightSkill("Android")} />
                  </div>
                  <div className="col">
                    <FontAwesomeIcon icon={faNode} title="NodeJS" onMouseEnter={() => this.highlightSkill("NodeJS")} />
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