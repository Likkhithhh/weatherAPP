const apiUrl = 'https://api.open-meteo.com/v1/forecast';
const geocodingUrl = 'https://geocoding-api.open-meteo.com/v1/search';

const locationInput = document.getElementById('location-input');
const getWeatherButton = document.getElementById('get-weather');
const weatherDisplay = document.getElementById('weather-display');

const weatherCodes = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Rime fog',
    51: 'Light drizzle',
    53: 'Moderate drizzle',
    55: 'Dense drizzle',
    61: 'Slight rain',
    63: 'Moderate rain',
    65: 'Heavy rain',
    71: 'Slight snow',
    73: 'Moderate snow',
    75: 'Heavy snow',
    80: 'Slight rain showers',
    81: 'Moderate rain showers',
    82: 'Violent rain showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm with slight hail',
    99: 'Thunderstorm with heavy hail'
};

function showMessage(message) {
    weatherDisplay.textContent = message;
}

async function findLocation(query) {
    const response = await fetch(
        `${geocodingUrl}?name=${encodeURIComponent(query)}&count=1&language=en&format=json`
    );

    if (!response.ok) {
        throw new Error('Unable to look up that location.');
    }

    const data = await response.json();
    if (!data.results || data.results.length === 0) {
        throw new Error('Location not found.');
    }

    return data.results[0];
}

async function getWeather(location) {
    try {
        showMessage('Loading weather...');

        const place = await findLocation(location);
        const params = new URLSearchParams({
            latitude: place.latitude,
            longitude: place.longitude,
            current: 'temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m',
            timezone: 'auto'
        });

        const response = await fetch(`${apiUrl}?${params}`);
        if (!response.ok) {
            throw new Error('Weather data is currently unavailable.');
        }

        const data = await response.json();
        displayWeather(place, data.current);
    } catch (error) {
        showMessage(`Error: ${error.message}`);
    }
}

function displayWeather(place, current) {
    weatherDisplay.textContent = '';

    const locationLabel = [place.name, place.admin1, place.country]
        .filter(Boolean)
        .join(', ');

    const rows = [
        ['Location', locationLabel],
        ['Temperature', `${current.temperature_2m} °C`],
        ['Humidity', `${current.relative_humidity_2m}%`],
        ['Condition', weatherCodes[current.weather_code] || `Weather code ${current.weather_code}`],
        ['Wind speed', `${current.wind_speed_10m} km/h`]
    ];

    for (const [label, value] of rows) {
        const item = document.createElement('div');
        item.className = 'weather-item';
        item.textContent = `${label}: ${value}`;
        weatherDisplay.appendChild(item);
    }
}

function handleSearch() {
    const location = locationInput.value.trim();
    if (!location) {
        showMessage('Please enter a location.');
        return;
    }
    getWeather(location);
}

getWeatherButton.addEventListener('click', handleSearch);
locationInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
});
