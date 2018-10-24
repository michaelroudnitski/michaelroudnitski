import React from "react";
import ReactDOM from "react-dom";

import style from "./index.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

class Index extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <main>
          <Home />
        </main>
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById("index")
);