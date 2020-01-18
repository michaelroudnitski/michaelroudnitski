import React from "react";
import Slide from "react-reveal/Slide";
import Typist from "react-typist";
import "./Home.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconMap from "./iconMap";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { skill: "Skills" };
    this.highlightSkill = this.highlightSkill.bind(this);
    this.Skill = this.Skill.bind(this);
  }

  highlightSkill(skill) {
    this.setState(state => ({ skill }));
  }

  Skill(props) {
    return (
      <div className="col">
        <FontAwesomeIcon
          icon={iconMap[props.name]}
          title={props.name}
          onMouseEnter={() => this.highlightSkill(props.name)}
          onMouseLeave={() => this.highlightSkill("Skills")}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row no-margin full-height">
          <div className="box-1 col-12 col-md-8">
            <div>
              <h1 className="name">
                Hi, my name is
                <Typist
                  startDelay={1000}
                  cursor={{ hideWhenDone: true, show: true }}
                >
                  <span>Slim Shady</span>
                  <Typist.Backspace count={10} delay={200} />
                  <span>Michael Roudnitski</span>
                </Typist>
              </h1>
              {/* <h1 className="name-title">
                
              </h1> */}
            </div>
            <Link to="/projects">
              <button className="btn btn-primary" id="projects-button">
                <h1>My Projects</h1>
              </button>
            </Link>
            <div className="contact-icon-container">
              <a href="https://github.com/michaelroudnitski">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/michael-roudnitski/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="mailto:michaelroudnitski@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
          <section className="col no-padding content">
            <div className="box box-2 col">
              <h1 className="row justify-content-center">About Me</h1>
              <br />
              <p className="row justify-content-md-center">
                I'm 3 years into my study of Computer Science at York University
                in Toronto, Canada and expect to graduate in 2021 with honors.
              </p>
              <p className="row justify-content-md-center inline">
                I've spent 2 summers as a fullstack web developer at{" "}
                <a
                  href="https://www.completelymanaged.com/"
                  className="inline primary-important"
                >
                  Completely Managed
                </a>{" "}
                where I worked on the LANAWARE Cloud platform.
              </p>
            </div>
            <div className="box box-3 col">
              <h1 className="row justify-content-center">{this.state.skill}</h1>
              <div className="row align-items-center">
                <this.Skill name="JavaScript" />
                <this.Skill name="Python" />
                <this.Skill name="Java" />
              </div>
              <div className="row align-items-center">
                <this.Skill name="Git" />
                <this.Skill name="Docker" />
                <this.Skill name="Angular" />
              </div>
              <div className="row align-items-center">
                <this.Skill name="React" />
                <this.Skill name="Flutter" />
                <this.Skill name="Databases" />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
