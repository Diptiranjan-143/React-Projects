import React, { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import Forecast from './components/Forecast';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [city, setCity] = useState('London');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = 'YOUR_API_KEY'; // Replace with actual API key from OpenWeatherMap
  const BASE_URL = 'https://api.openweathermap.org/data/2.5';

  const fetchWeatherData = async (cityName) => {
    try {
      setLoading(true);
      setError(null);
      
      // Current weather
      const weatherResponse = await fetch(
        `${BASE_URL}/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      
      if (!weatherResponse.ok) throw new Error('City not found');
      
      const weatherData = await weatherResponse.json();
      
      // Forecast
      const forecastResponse = await fetch(
        `${BASE_URL}/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      
      const forecastData = await forecastResponse.json();
      
      setWeatherData(weatherData);
      setForecastData(forecastData.list.slice(0, 5)); // Next 5 forecasts
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, []);

  const handleSearch = (searchCity) => {
    setCity(searchCity);
    fetchWeatherData(searchCity);
  };

  const getWeatherIcon = (condition) => {
    const icons = {
      'Clear': '☀️',
      'Clouds': '☁️',
      'Rain': '🌧️',
      'Snow': '❄️',
      'Thunderstorm': '⛈️',
      'Drizzle': '🌦️',
      'Mist': '🌫️'
    };
    return icons[condition] || '🌤️';
  };

  return (
    <div className="container">
      <h1 className="app-title">🌤️ Weather Forecast</h1>
      
      <SearchBar onSearch={handleSearch} />
      
      {loading ? (
        <div className="loading">Loading weather data...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : weatherData && (
        <div className="weather-container">
          <WeatherCard 
            data={weatherData} 
            icon={getWeatherIcon(weatherData.weather[0].main)}
          />
          
          <div className="forecast-section">
            <h2>5-Hour Forecast</h2>
            <div className="forecast-grid">
              {forecastData.map((item, index) => (
                <Forecast 
                  key={index}
                  data={item}
                  icon={getWeatherIcon(item.weather[0].main)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;