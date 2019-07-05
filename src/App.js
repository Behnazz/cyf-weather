import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <input className="searchInput" />
          <button className="searchButton">Find Weather</button>
        </header>
        <main className="app__main">
          <div centerImageDiv>
            <img
              className="image"
              src="https://svs.gsfc.nasa.gov/vis/a010000/a011400/a011482/frames/500x354_7x5_1p/Weather_Icons/01cloudy-t9953_transp.png"
              alt="cloud"
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
