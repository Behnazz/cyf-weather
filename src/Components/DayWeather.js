import React from "react";
import "./dayWeather.css";
import clear from "../img/weather-icons/clear.svg";
import storm from "../img/weather-icons/storm.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlyCloudy from "../img/weather-icons/mostlyCloudy.svg";
import partlyCloudy from "../img/weather-icons/partlyCloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import unknown from "../img/weather-icons/unknown.svg";

const DayWeather = props => {
  const { weatherData } = props;
  return (
    <div>
      <div className="weekdays">
        {weatherData.map(item => (
          <div key= {item.dt} className="days">
            <h4 className="time-temp">{item.dt_txt.split(" ")[1]}</h4>
            <img
              className="button-img"
              src={
                weatherData !== "" && item.weather[0].id === 800
                  ? clear
                  : item.weather[0].id < 300
                  ? storm
                  : item.weather[0].id >= 300 && item.weather[0].id <= 499
                  ? drizzle
                  : item.weather[0].id >= 500 && item.weather[0].id <= 599
                  ? rain
                  : item.weather[0].id >= 600 && item.weather[0].id <= 699
                  ? snow
                  : item.weather[0].id >= 700 && item.weather[0].id <= 799
                  ? fog
                  : item.weather[0].id === 801
                  ? partlyCloudy
                  : item.weather[0].id > 801 && item.weather[0].id <= 805
                  ? mostlyCloudy
                  : unknown
              }
              alt="cloud"
            />
            <h4 className="time-temp">{Math.round(item.main.temp)} &#8451;</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayWeather;
