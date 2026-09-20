# Weather App

A lightweight browser-based weather dashboard built with **HTML, CSS, and JavaScript**.

The app lets a user search for a city and view the current temperature, humidity, weather condition, and wind speed. It uses the public **Open-Meteo** geocoding and forecast APIs, so no API key or secret is stored in the repository.

## Features

- Search weather by city or location name
- Current temperature and humidity
- Human-readable weather conditions
- Wind-speed display
- Enter-key and button search
- No API key required
- Simple static-site architecture suitable for GitHub Pages

## Run locally

You can open `index.html` directly in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Project structure

```text
.
├── index.html
├── styles.css
├── script.js
└── weatherimg1.jpg
```

## Security

Do not commit API keys, passwords, tokens, or other credentials to a public repository. This version does not require a weather API key.
