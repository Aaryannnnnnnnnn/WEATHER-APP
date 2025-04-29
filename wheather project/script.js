const API_KEY = '0b782f788fdfee3f4d0302ab98d22d75';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('getWeatherBtn').addEventListener('click', async () => {
    const city = document.getElementById('cityInput').value;
    const weatherResult = document.getElementById('weatherResult');

    if (!city) {
        weatherResult.innerHTML = 'Please enter a city name.';
        return;
    }

    try {
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const weatherData = await response.json();
        weatherResult.innerHTML = `
            <h2>${weatherData.name}</h2>
            <p>Temperature: ${weatherData.main.temp} °C</p>
            <p>Description: ${weatherData.weather[0].description}</p>
        `;
    } catch (error) {
        weatherResult.innerHTML = error.message;
    }
});