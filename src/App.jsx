import React, { useState, useEffect } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import axios from "axios";

function App() {
  const [city, setCity] = useState("Nairobi"); // Default city before search
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);



  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = "30t098e0f4afod5dd6c2f41bba759bcf";
        const res = await axios.get(
          `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
        );
        setWeatherData(res.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData(); 
  }, []); 

  const handleSearch = async (searchCity) => {
    setCity(searchCity);

    try {
      const apiKey = "bf744cad96054738bc73e9878b52bdca";

      const currentRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=metric`
      );
      setWeatherData(currentRes.data);
    

      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${apiKey}&units=metric`
      );

      const fullList = forecastRes.data.list;

      
      const dailyData = fullList.filter((item) => item.dt_txt.includes("12:00:00"));
      setForecastData(dailyData); 

    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("City not found or API error.");
    }
  };

  return (
    <div className="app">
      <SearchForm onSearch={handleSearch} />
      <CurrentWeather data={weatherData} city={city} />
      <Forecast forecastData={forecastData}/> 
    </div>
  );
}

export default App;



