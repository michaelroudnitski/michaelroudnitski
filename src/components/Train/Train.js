import React from "react";
import style from "./Train.scss";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="train-track"></div>
        <div className="train"></div>
      </div>
    )
  }
}