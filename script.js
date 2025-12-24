const apiKey = 'e1df2f4794f96139e687cac6f1eddd5f';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('location-input');
const getWeatherButton = document.getElementById('get-weather');
const weatherDisplay = document.getElementById('weather-display');

async function getWeather(location) {
    try {
        const response = await fetch(`${apiUrl}?q=${location}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('Weather data not found');
        }
        const weatherData = await response.json();
        displayWeather(weatherData);
    } catch (error) {
        weatherDisplay.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

function displayWeather(data) {
    weatherDisplay.innerHTML = `
        <div class="weather-item">Location: ${data.name}</div>
        <div class="weather-item">Temperature: ${data.main.temp}°C</div>
        <div class="weather-item">Humidity: ${data.main.humidity}%</div>
        <div class="weather-item">Condition: ${data.weather[0].description}</div>
    `;
}

getWeatherButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        getWeather(location);
    } else {
        weatherDisplay.innerHTML = '<p>Please enter a location.</p>';
    }
});