import React from 'react';
import { Card, Typography, Space } from 'antd';
import { WeatherData } from '../utils/types';
import '../weatherStyles.css';

const { Text, Title } = Typography;

interface WeatherCardProps {
    weatherData: WeatherData;
    unit: 'metric' | 'imperial';
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData, unit }) => {
    const temperatureUnit = unit === 'metric' ? '°C' : '°F';
    const speedUnit = unit === 'metric' ? 'm/s' : 'mph';

    return (
        <Card style={{ marginTop: 15 }} className="weather-card">
            <Space direction="vertical">
                <Title level={2}>
                    {weatherData.cityName}, {weatherData.countryCode}
                </Title>
                <Text>
                    {weatherData.temperature}
                    {temperatureUnit}
                </Text>
                <Text>{weatherData.weatherDescription}</Text>
                <Text>Wind: {weatherData.windSpeed} {speedUnit}</Text>
                <Text>Humidity: {weatherData.humidity}%</Text>
            </Space>
        </Card>
    );
};

export { WeatherCard };
