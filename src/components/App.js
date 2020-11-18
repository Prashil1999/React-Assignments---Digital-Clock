import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { time: Date.now() };
  }
  componentDidMount() {
    this.id = setInterval(() => {
      this.setState({ time: this.state.time + 1000 });
    }, 1000);
    //this.setState = { time: Date.now() };
  }
  componentWillUnmount() {
    clearInterval(this.id);
  }
  render() {
    return (
      <>
        <div className="Clock">
          <h3 id="time">{new Date(this.state.time).toLocaleTimeString()}</h3>
        </div>
      </>
    );
  }
}

export default App;
