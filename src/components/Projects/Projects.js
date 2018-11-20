import React from 'react';
import style from './Projects.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid } from '@fortawesome/free-brands-svg-icons'


import junojump from '../../../img/junojump/junojump.png';
import summnews from '../../../img/summnews/summnews.png';
import yuroomie from '../../../img/yuroomie/yuroomie.png';


export default () => (
  <div className="container">
    <Link to="/home">
      HOME
    </Link>
    <h1 className="section-header">Featured</h1>
    <div className="col">
      <div className="card text-white bg-dark mb-3">
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
            <div className="col-md-6">
              <a href="https://play.google.com/store/apps/details?id=com.MichaelRoudnitski.Slider&hl=en"><img className="card-image" src={junojump} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="card text-white bg-dark mb-3">
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
            <div className="col-md-6">
              <a href="https://github.com/AdamZed/SummNews"><img className="card-image" src={summnews} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="card text-white bg-dark mb-3">
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
            <div className="col-md-6">
              <a href="https://github.com/michaelroudnitski/yuroomie"><img className="card-image" src={yuroomie} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 className="section-header">More</h1>
  </div>
)