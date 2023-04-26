import React, { useState } from 'react';
import { Button, Input, Select, Row, Col } from 'antd';
import { UserInput } from '../utils/types';

const { Option } = Select;

interface WeatherInputFormProps {
    onSubmit: (userInput: UserInput) => void;
}

const WeatherInputForm: React.FC<WeatherInputFormProps> = ({ onSubmit }) => {
    const [city, setCity] = useState('');
    const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
    const [numberOfDays, setNumberOfDays] = useState(3);

    const handleSubmit = () => {
        onSubmit({ city, unitSystem, numberOfDays });
    };

    return (
        <Row gutter={16} align="middle" justify="center">
            <Col>
                <Input
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </Col>
            <Col>
                <Select
                    value={unitSystem}
                    onChange={(value) => setUnitSystem(value as 'metric' | 'imperial')}
                >
                    <Option value="metric">Metric</Option>
                    <Option value="imperial">Imperial</Option>
                </Select>
            </Col>
            <Col>
                <Select
                    value={numberOfDays}
                    onChange={(value) => setNumberOfDays(value)}
                >
                    <Option value={1}>1 Day</Option>
                    <Option value={2}>2 Days</Option>
                    <Option value={3}>3 Days</Option>
                </Select>
            </Col>
            <Col>
                <Button type="primary" onClick={handleSubmit}>
                    Get Weather
                </Button>
            </Col>
        </Row>
    );
};

export { WeatherInputForm };
