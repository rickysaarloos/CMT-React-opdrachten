function WeatherCard({ item, toggleOpen }) {
  const iconUrl = `https://openweathermap.org/img/wn/${item.current.weather[0].icon}@2x.png`;

  return (
    <div>
      <div
        className="p-4 bg-white/20 backdrop-blur-md rounded-lg cursor-pointer flex justify-between items-center"
        onClick={() => toggleOpen(item.id)}
      >
        <h2 className="text-xl font-semibold">{item.city}</h2>
        <img src={iconUrl} alt="weer icoon" className="w-12" />
      </div>

      {item.open && (
        <div className="mt-2 p-4 bg-white/10 rounded-lg">
          <p><strong>Temperatuur:</strong> {item.current.main.temp}°C</p>
          <p><strong>Gevoelstemperatuur:</strong> {item.current.main.feels_like}°C</p>
          <p><strong>Wind:</strong> {item.current.wind.speed} m/s</p>
          <p className="mt-4 font-semibold">4-daagse voorspelling:</p>

          <div className="grid grid-cols-2 gap-3 mt-2">
            {item.forecast.map((day, index) => (
              <div key={index} className="p-3 bg-white/20 rounded-md text-center">
                <p>{day.dt_txt.split(" ")[0]}</p>
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                  className="mx-auto"
                />
                <p>{day.main.temp}°C</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherCard;
