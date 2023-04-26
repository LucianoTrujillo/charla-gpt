import React, { useState, useEffect } from 'react';
import { WeatherInputForm } from './components/WeatherInputForm';
import { WeatherCard } from './components/WeatherCard';
import { WeatherForecast } from './components/WeatherForecast';
import { WeatherData, ForecastData, UserInput } from './utils/types';
import { fetchCurrentWeather, fetchWeatherForecast } from './api/weather';

const App: React.FC = () => {
  const [userInput, setUserInput] = useState<UserInput>({
    city: '',
    unitSystem: 'metric',
    numberOfDays: 3,
  });
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);

  useEffect(() => {
    if (userInput.city) {
      const fetchWeather = async () => {
        const currentWeatherData = await fetchCurrentWeather(userInput);
        const forecastWeatherData = await fetchWeatherForecast(userInput);
        setWeatherData(currentWeatherData);
        setForecastData(forecastWeatherData);
      };

      fetchWeather();
    }
  }, [userInput]);

  const handleSubmit = (input: UserInput) => {
    setUserInput(input);
  };

  return (
    <div className="App">
      <WeatherInputForm onSubmit={handleSubmit} />
      {weatherData && <WeatherCard weatherData={weatherData} unit={userInput.unitSystem} />}
      <WeatherForecast forecastData={forecastData} unit={userInput.unitSystem} />
    </div>
  );
};

export default App;
