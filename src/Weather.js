import React, { useState } from "react";
import axios from "axios";



export const Weather = () => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"851a0d18f674f8b384b208630ccb0e20"}`
      );
      setWeather(response);
    } catch (error) {
      console.log(error);
    }
  };
  const cityChange = () => {
    fetchWeather();
    setCity("");
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
        <div className="bg-blue-500 rounded-lg w-full max-w-sm text-center py-6 px-4 animate-fadeIn">
          <h1 className="text-white font-semibold text-3xl mb-4">
            Current Weather Report
          </h1>
          <input
            className="py-2 px-4 w-full rounded-md mb-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
            type="text"
            placeholder="Enter Your City"
            value={city}
            onChange={handleCityChange}
          />
          <button
            className="py-2 px-4 w-full bg-slate-400 rounded-md text-white hover:bg-slate-600 transition-all duration-300"
            onClick={cityChange}
          >
            Get Weather
          </button>
          {weather && (
            <div className="mt-6 text-white animate-slideIn">
              <h2 className="text-2xl font-bold">{weather.data.name}</h2>
              <p className="text-lg">Temp is: {weather.data.main.temp}°C</p>
              <p className="text-sm capitalize">
                {weather.data.weather[0].description}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
