import React, { Component } from "react";
import "./App.css";
import SearchCity from "./Components/SearchCity";
import CurrentWeather from "./Components/CurrentWeather";
import DayWeather from "./Components/DayWeather";

class App extends Component {
  status = {};

  render() {
    return (
      <div className="app">
        <SearchCity />
        <div className="app__main">
          <CurrentWeather />
          <DayWeather />
        </div>
      </div>
    );
  }
}

export default App;
