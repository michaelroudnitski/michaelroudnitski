import React from 'react';
import style from './Projects.scss';
import Fade from "react-reveal/Fade";
import ScaleImage from "../ScaleImage/ScaleImage";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons'

// Images
import junojump from '../../../img/junojump/junojump.png';
import summnews from '../../../img/summnews/summnews.png';
import yuroomie from '../../../img/yuroomie/yuroomie.png';

const JUNOJUMPIMAGES = [
  '../../../img/junojump/junojump.png',
  '../../../img/junojump/junojump1.png',
  '../../../img/junojump/junojump2.png',
  '../../../img/junojump/junojump3.png'
]

const SUMMNEWSIMAGES = [
  '../../../img/summnews/summnews.png',
  '../../../img/summnews/summnews1.png',
  '../../../img/summnews/summnews2.png'
]

const YUROOMIEIMAGES = [
  '../../../img/yuroomie/yuroomie.png',
  '../../../img/yuroomie/yuroomie1.png'
]

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scaleimage: false,
      galleryImages: null
    }
    this.toggleScaleImage = this.toggleScaleImage.bind(this);
    this.escapePress = this.escapePress.bind(this);
  }

  toggleScaleImage(images=null) {
    this.setState(state => ({
      galleryImages: images ? images : null,
      scaleimage: !state.scaleimage
    }));
  }

  escapePress(event) {
    if (event.keyCode === 27) {
      this.setState(() => ({
        scaleimage: false
      }))
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escapePress, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escapePress, false);
  }

  render() {
    return (
      <div>
        {this.state.scaleimage && <FontAwesomeIcon icon={faTimes} className="close-button" onClick={this.toggleScaleImage} />}
        {this.state.scaleimage && <ScaleImage images={this.state.galleryImages} />}
        <nav className="nav-bar">
          <div className="nav-content row justify-content-between">
            <Link to="/home"><h3 id="home-button">Home</h3></Link>
            <div className="nav-right">
              <a href="https://github.com/michaelroudnitski"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://www.linkedin.com/in/michael-roudnitski/"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="mailto:michaelroudnitski@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
          </div>
        </nav>
        <div className="container">
          <Fade>
            <h1 className="section-header">Featured Projects</h1>
          </Fade>
          <div className="col">
            <Fade>
              <div className="card bg-dark mb-3">
                <div className="card-header">
                  <h3 className="card-title">
                    <a href="https://play.google.com/store/apps/details?id=com.MichaelRoudnitski.Slider&hl=en">Juno Jump (2017)</a>
                  </h3>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="card-text">Juno Jump is an infinite platformer built for Android using Unity.</p>
                      <p className="card-text">
                        Designed to be simple, addictive and most of all infuriating.
                        Users can collect coins to unlock unique trails, compare best scores and achievements with Google Play Services and of course, enjoy the game!
                  </p>
                    </div>
                    <Fade right>
                      <div className="col-md-6">
                        <img className="card-image" src={junojump} onClick={() => this.toggleScaleImage(JUNOJUMPIMAGES)} />
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade>
              <div className="card bg-dark mb-3">
                <div className="card-header">
                  <h3 className="card-title"><a href="https://github.com/AdamZed/SummNews">SummNews (2018)</a></h3>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="card-text">SummNews is an app made with Flutter for Android and IOS.</p>
                      <p className="card-text">
                        Using a Python script to scrape articles from news sources, a summarized version of
                        the article body and details are sent to Google Firebase and that data is used by the front-end client
                    </p>
                      <p className="card-text">
                        Me and my friend <a href="https://github.com/AdamZed">Adam Zanon </a>
                        built SummNews for <a href="https://yorkuhacks.com/">YorkUHacks</a>, a 24 hour hackathon hosted by York University and we won 5th place!
                    </p>
                    </div>
                    <Fade right>
                      <div className="col-md-6">
                        <img className="card-image" src={summnews} onClick={() => this.toggleScaleImage(SUMMNEWSIMAGES)} />
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade>
              <div className="card bg-dark mb-3">
                <div className="card-header">
                  <h3 className="card-title">
                    <a href="https://github.com/michaelroudnitski/yuroomie">YURoomie (2018)</a></h3>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="card-text">YURoomie is a web platform built with Django.</p>
                      <p className="card-text">It was designed to help university students find roommates studying at the same school.</p>
                      <p className="card-text">The project was completed for <a href="http://hackfest.library.yorku.ca/2018/">Steacie Library Hackfest</a> hosted by York University.</p>
                    </div>
                    <Fade right>
                      <div className="col-md-6">
                        <img className="card-image" src={yuroomie} onClick={() => this.toggleScaleImage(YUROOMIEIMAGES)} />
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <h1 className="section-header">More</h1>
        </div>
      </div>
    )
  }
}