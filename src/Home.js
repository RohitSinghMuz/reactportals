import React, { Component } from "react";
import ReactDOM from "react-dom";
class Home extends Component {
  render() {
    return ReactDOM.createPortal(
      <h2>Home Page</h2>,
      document.getElementById("homepage")
    );
  }
}
export default Home;
