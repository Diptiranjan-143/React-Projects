import React from 'react';
import './Forecast.css';

function Forecast({ data, icon }) {
  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], { 
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="forecast-card">
      <div className="forecast-time">
        {formatTime(data.dt)}
      </div>
      <div className="forecast-icon">
        {icon}
      </div>
      <div className="forecast-temp">
        {Math.round(data.main.temp)}°C
      </div>
      <div className="forecast-details">
        <span>💧 {data.main.humidity}%</span>
        <span>💨 {data.wind.speed}m/s</span>
      </div>
    </div>
  );
}

export default Forecast;