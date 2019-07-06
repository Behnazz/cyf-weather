import React from "react";
import "./currentweather.css";
import clear from "../img/weather-icons/clear.svg";
import storm from "../img/weather-icons/storm.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlyCloudy from "../img/weather-icons/mostlyCloudy.svg";
import partlyCloudy from "../img/weather-icons/partlyCloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import unknown from "../img/weather-icons/unknown.svg";

const CurrentWeather = props => {
  const { weatherData, weatherId, weatherDescription } = props;
  console.log(weatherData.main);

  return (
    <div>
      <div className="centerImageDiv">
        <img
          className="image"
          src={
            weatherData !== "" && weatherId === 800
              ? clear
              : weatherId < 300
              ? storm
              : weatherId >= 300 && weatherId <= 499
              ? drizzle
              : weatherId  >= 500 && weatherId <= 599
              ? rain
              : weatherId >= 600 && weatherId <= 699
              ? snow
              : weatherId >= 700 && weatherId <= 799
              ? fog
              : weatherId === 801
              ? partlyCloudy 
              : weatherId > 801 && weatherId <= 805
              ? mostlyCloudy
              : unknown
          }
          alt="weather icons"
        />
      </div>
      <div className="mainImageText">
        <h3>{weatherDescription}</h3>
      </div>
      <div className="mainImageTemp">
        <h3>Temperature {Math.round(weatherData.main.temp)} &#8451;</h3>
      </div>
      <div className="humidityPressureDiv">
        <h4 className="humidityPressure">Humidity </h4>
        <h5>{weatherData.main.humidity}%</h5>
        <h4 className="humidityPressure">Pressure</h4>
        <h5>{weatherData.main.pressure}</h5>
      </div>
    </div>
  );
};

export default CurrentWeather;
