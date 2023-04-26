// Define types for OpenWeatherMap API responses

export interface OpenWeatherMapCurrent {
    coord: { lon: number; lat: number };
    weather: Array<{ id: number; main: string; description: string; icon: string }>;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    wind: { speed: number; deg: number };
    clouds: { all: number };
    dt: number;
    sys: { country: string };
    name: string;
}

export interface OpenWeatherMapForecast {
    city: { name: string; country: string; coord: { lon: number; lat: number } };
    list: Array<{
        dt: number;
        main: {
            temp: number;
            temp_min: number;
            temp_max: number;
            pressure: number;
            humidity: number;
        };
        weather: Array<{ id: number; main: string; description: string; icon: string }>;
        wind: { speed: number; deg: number };
        clouds: { all: number };
    }>;
}

// Define types for the WeatherCard component

export interface WeatherData {
    cityName: string;
    countryCode: string;
    temperature: number;
    weatherDescription: string;
    weatherIcon: string;
    windSpeed: number;
    humidity: number;
}

// Define types for the WeatherForecast component

export interface ForecastData {
    date: string;
    temperature: number;
    weatherDescription: string;
    weatherIcon: string;
    windSpeed: number;
    humidity: number;
}

// Define type for the user's input

export interface UserInput {
    city: string;
    unitSystem: "metric" | "imperial";
    numberOfDays: number;
}
