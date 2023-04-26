import React from 'react';
import { Card, Col, Row, Typography, Space } from 'antd';
import { ForecastData } from '../utils/types';
import '../weatherStyles.css';

const { Text, Title } = Typography;

interface WeatherForecastProps {
    forecastData: ForecastData[];
    unit: 'metric' | 'imperial';
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ forecastData, unit }) => {
    const temperatureUnit = unit === 'metric' ? '°C' : '°F';
    const speedUnit = unit === 'metric' ? 'm/s' : 'mph';

    return (
        <Row gutter={[16, 16]} style={{ marginTop: 15 }}>
            {forecastData.map((dayForecast, index) => (
                <Col key={index} flex={1}>
                    <Card className="forecast-card">
                        <Space direction="vertical">
                            <Title level={4}>{dayForecast.date}</Title>
                            <Text>
                                {dayForecast.temperature}
                                {temperatureUnit}
                            </Text>
                            <Text>{dayForecast.weatherDescription}</Text>
                            <Text>Wind: {dayForecast.windSpeed} {speedUnit}</Text>
                            <Text>Humidity: {dayForecast.humidity}%</Text>
                        </Space>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export { WeatherForecast };
