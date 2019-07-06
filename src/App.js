import React, { Component } from "react";
import "./App.css";
import SearchCity from "./Components/SearchCity";
import CurrentWeather from "./Components/CurrentWeather";
import DayWeather from "./Components/DayWeather";

class App extends Component {
  state = {
    city: "london",
    weather: "",
    id :0,
    description:""

  };

  componentDidMount() {
    console.log(this.state.city);
    this.handleSearch();
  }

  handleCityInput = e => {
    this.setState({
      city: e.target.value
    });
  };

  handleSearch = async () => {
    const data = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${
        this.state.city
      }&cnt=8&units=metric&appid=0c7674c74ce2a976435208059ac6092f`
    );
    const weatherData = await data.json();
    this.setState({
      weather: weatherData,
      id: weatherData.list[0].weather[0].id,
      description:weatherData.list[0].weather[0].description
    });
  };

  render() {
    console.log(this.state.weather);
    const { weather ,id, description} = this.state;
    console.log(id)
    return (
      weather !== "" && 
      <div className="app">
        <SearchCity
          search={this.handleSearch}
          inputChange={this.handleCityInput}
          inputValue={this.state.city}
        />
        <div className="app__main">
          <CurrentWeather weatherData={weather !== "" && weather.list[0]} weatherId={id} weatherDescription={description}/>
          <DayWeather  weatherData={weather !== "" && weather.list} />
        </div>
      </div>
      
    );
  }
}

export default App;
