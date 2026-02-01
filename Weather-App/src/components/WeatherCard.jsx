import React from 'react';
import './WeatherCard.css';

function WeatherCard({ data, icon }) {
  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="weather-card">
      <div className="weather-header">
        <div className="location">
          <h2>{data.name}, {data.sys.country}</h2>
          <p>{new Date().toLocaleDateString('en-US', { 
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</p>
        </div>
        <div className="main-icon">
          <span className="icon">{icon}</span>
          <span className="temp">{Math.round(data.main.temp)}°C</span>
        </div>
      </div>
      
      <div className="weather-details">
        <div className="detail-item">
          <span className="label">Feels Like</span>
          <span className="value">{Math.round(data.main.feels_like)}°C</span>
        </div>
        <div className="detail-item">
          <span className="label">Humidity</span>
          <span className="value">{data.main.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="label">Wind Speed</span>
          <span className="value">{data.wind.speed} m/s</span>
        </div>
        <div className="detail-item">
          <span className="label">Pressure</span>
          <span className="value">{data.main.pressure} hPa</span>
        </div>
        <div className="detail-item">
          <span className="label">Sunrise</span>
          <span className="value">{formatDate(data.sys.sunrise)}</span>
        </div>
        <div className="detail-item">
          <span className="label">Sunset</span>
          <span className="value">{formatDate(data.sys.sunset)}</span>
        </div>
      </div>
      
      <div className="weather-condition">
        <p>{data.weather[0].description}</p>
      </div>
    </div>
  );
}

export default WeatherCard;