import React from "react";
import "./CurrentWeather.css";

function CurrentWeather({ data, city }) {
  if (!data || !data.main || !data.weather || !data.weather[0]) {
    return (
      <div className="current-weather">
        <div className="left">
          <h1>Nairobi</h1>
          <h2>Saturday 05:10pm</h2>
          <p>Weather conditions: <strong>light rain</strong></p>
          <p>Humidity: <strong>50%</strong></p>
          <p>Wind: <strong>5.66 km/h</strong></p>
        </div>
        
        <div className="right">
          <h1>25 °C</h1>
        </div>
        
      </div>
    );
  }

  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="current-weather">
      <div className="left">
        <h1>{data.name}</h1>
        <h2>
          {new Date().toLocaleDateString(undefined, { weekday: 'long' })}{" "}
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </h2>
        <p>Weather conditions: <strong>{data.weather[0].description}</strong></p>
        <p>Humidity: <strong>{data.main.humidity}%</strong></p>
        <p>Wind: <strong>{data.wind.speed} km/h</strong></p>
      </div>

      <div className="right">
        <img src={iconUrl} alt={data.weather[0].description} />
        <h1>{Math.round(data.main.temp)} °C</h1>
      </div>
    </div>
  );
}

export default CurrentWeather;
