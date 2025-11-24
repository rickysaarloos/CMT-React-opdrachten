import { useState } from "react";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [backgroundClass, setBackgroundClass] = useState("bg-blue-500");
  
  const apiKey = "641fd1f55b373d910116f2c7ad09a76e";

  
  const setBackgroundByWeather = (weather) => {
    switch (weather) {
      case "Clouds":
        setBackgroundClass("bg-gray-400");
        break;
      case "Clear":
        setBackgroundClass("bg-yellow-400");
        break;
      case "Rain":
        setBackgroundClass("bg-blue-700");
        break;
      case "Snow":
        setBackgroundClass("bg-blue-200");
        break;
      default:
        setBackgroundClass("bg-indigo-500");
    }
  };

  const getWeather = async (e) => {
    e.preventDefault();
    if (!city) return;

    const currentUrl = 
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const forecastUrl =
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const current = await fetch(currentUrl).then(r => r.json());
      const forecast = await fetch(forecastUrl).then(r => r.json());

      if (current.cod === "404") {
        alert("Stad niet gevonden!");
        return;
      }

      setBackgroundByWeather(current.weather[0].main);

      const nextDays = [];
      for (let i = 0; i < forecast.list.length; i += 8) {
        nextDays.push(forecast.list[i]);
      }

      const newEntry = {
        id: Date.now(),
        city: current.name,
        current,
        forecast: nextDays,
        open: false
      };

      setSearchHistory((prev) => [newEntry, ...prev]);
      setCity("");
      
    } catch (error) {
      console.error("Fout bij ophalen:", error);
    }
  };

  const toggleOpen = (id) => {
    setSearchHistory(history =>
      history.map(item =>
        item.id === id ? { ...item, open: !item.open } : item
      )
    );
  };

  return (
    <div className={`min-h-screen ${backgroundClass} transition-all p-6 text-white`}>
      <h1 className="text-4xl font-bold mb-8 text-center">Weer App - Ricky Saarloos</h1>

      <form
        onSubmit={getWeather}
        className="flex gap-3 bg-white/20 backdrop-blur-md p-4 rounded-xl shadow-lg justify-center"
      >
        <input
          type="text"
          placeholder="Zoek een stad…"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 rounded-lg outline-none text-black w-60"
        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-lg font-semibold transition"
        >
          Zoeken
        </button>
      </form>

 
      <div className="mt-6 flex flex-col gap-4 max-w-md mx-auto">
        {searchHistory.map((item) => (
          <WeatherCard
            key={item.id}
            item={item}
            toggleOpen={toggleOpen}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
