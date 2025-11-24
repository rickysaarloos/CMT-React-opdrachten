function WeatherInfo({ data }) {
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>
        {data.name} <img src={iconUrl} alt="weer icoon" />
      </h2>

      <p><strong>Temperatuur:</strong> {data.main.temp}°C</p>
      <p><strong>Gevoelstemperatuur:</strong> {data.main.feels_like}°C</p>
      <p><strong>Luchtvochtigheid:</strong> {data.main.humidity}%</p>
      <p><strong>Wind snelheid:</strong> {data.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherInfo;
