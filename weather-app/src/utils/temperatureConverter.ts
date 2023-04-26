export function celsiusToFahrenheit(temp: number) {
    return (temp * 9 / 5) + 32;
}

export function fahrenheitToCelsius(temp: number) {
    return (temp - 32) * 5 / 9;
}
