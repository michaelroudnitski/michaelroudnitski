import React from "react";
import ReactDOM from "react-dom";

import Main from "./components/Home/Home";

class Index extends React.Component {
  render() {
    return (
      <Main />
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById("index")
);