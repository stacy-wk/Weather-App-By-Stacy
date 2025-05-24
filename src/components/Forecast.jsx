import React from "react";
import "./Forecast.css";

const Forecast = ({ forecastData }) => {
  if (forecastData && forecastData.length > 0) {
    return (
      <div className="forecast">
        {forecastData.map((day, index) => {
          const date = new Date(day.dt * 1000);
          const weekday = date.toLocaleDateString("en-US", { weekday: "short" });

          return (
            <div className="forecast-day" key={index}>
              <p>{weekday}</p>
              <img
                className="forecast-icon"
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt={day.weather[0].description}
              />
              <p>
                <strong className="max-temperature">{Math.round(day.main.temp_max)}°C</strong>
                <span className="min-temperature">{Math.round(day.main.temp_min)}°C</span>
              </p>
            </div>
          );
        })}
      </div>
    );
  }

  // fallback static forecast if no data
  const allDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date().getDay();
  const days = [...allDays.slice(today), ...allDays.slice(0, today)];

  return (
    <div className="forecast">
      {days.slice(0, 5).map((day, index) => (
        <div className="forecast-day" key={index}>
          <p>{day}</p>
          <img
            className="forecast-icon"
            src="https://openweathermap.org/img/wn/10d.png"
            alt="weather icon"
          />
          <p>
            <strong className="max-temperature">26°C</strong>{" "}
            <span className="min-temperature">15°C</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;





