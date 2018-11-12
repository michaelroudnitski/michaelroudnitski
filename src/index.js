import React from "react";
import ReactDOM from "react-dom";

import style from "./index.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

import { BrowserRouter as Router, Route } from 'react-router-dom';

class Index extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          {/* <Navbar /> */}
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </main>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById("index")
);