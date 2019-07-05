import React from "react";

const CurrentWeather = () => {
  return (
    <div>
      <div className="centerImageDiv">
        <img
          className="image"
          src="https://svs.gsfc.nasa.gov/vis/a010000/a011400/a011482/frames/500x354_7x5_1p/Weather_Icons/01-partly-cloudy-t9954_transp.png"
          alt="cloud"
        />
      </div>
      <div className="mainImageText">
        <h3>Overcast Clouds</h3>
      </div>
      <div className="mainImageTemp">
        <h3>Temperature 10 to 11 C </h3>
      </div>
      <div className="humidityPressureDiv">
        <h4 className="humidityPressure">Humidity</h4>
        <h5>78%</h5>
        <h4 className="humidityPressure">Pressure</h4>
        <h5>1008.47</h5>
      </div>
    </div>
  );
};

export default CurrentWeather;
