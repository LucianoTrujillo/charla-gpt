import axios from 'axios';
import { API_KEY } from '../config';
import { OpenWeatherMapCurrent, OpenWeatherMapForecast, WeatherData, ForecastData, UserInput } from '../utils/types';


const currentWeatherUrl = (city: string, unitSystem: string) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unitSystem}`;

const forecastWeatherUrl = (city: string, unitSystem: string) =>
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${unitSystem}`;

export const fetchCurrentWeather = async (userInput: UserInput): Promise<WeatherData> => {
    const response = await axios.get<OpenWeatherMapCurrent>(currentWeatherUrl(userInput.city, userInput.unitSystem));
    const data = response.data;

    return {
        cityName: data.name,
        countryCode: data.sys.country,
        temperature: data.main.temp,
        weatherDescription: data.weather[0].description,
        weatherIcon: data.weather[0].icon,
        windSpeed: data.wind.speed,
        humidity: data.main.humidity,
    };
};

export const fetchWeatherForecast = async (userInput: UserInput): Promise<ForecastData[]> => {
    const response = await axios.get<OpenWeatherMapForecast>(forecastWeatherUrl(userInput.city, userInput.unitSystem));
    const data = response.data;

    // Filter forecasts to only include data around midday (12:00 PM)
    const middayForecasts = data.list.filter((forecast) => {
        const date = new Date(forecast.dt * 1000);
        return date.getUTCHours() === 12;
    });

    // Slice array to only return the chosen number of days
    const chosenDaysForecasts = middayForecasts.slice(0, userInput.numberOfDays);

    return chosenDaysForecasts.map((forecast) => ({
        date: new Date(forecast.dt * 1000).toISOString().substr(0, 10),
        temperature: forecast.main.temp,
        weatherDescription: forecast.weather[0].description,
        weatherIcon: forecast.weather[0].icon,
        windSpeed: forecast.wind.speed,
        humidity: forecast.main.humidity,
    }));
};
