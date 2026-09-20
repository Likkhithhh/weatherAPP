# Weather App

[![Static site check](https://github.com/Likkhithhh/weatherAPP/actions/workflows/static-site.yml/badge.svg)](https://github.com/Likkhithhh/weatherAPP/actions/workflows/static-site.yml)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![HTML5](https://img.shields.io/badge/HTML5-semantic-orange)
![CSS3](https://img.shields.io/badge/CSS3-responsive-blue)

A lightweight browser-based weather dashboard built with **HTML, CSS, and JavaScript**.

The app resolves a location name with Open-Meteo geocoding and then fetches current weather data. It intentionally uses a **keyless public API**, so no credential has to be stored in the browser or repository.

## Why this project matters

This project demonstrates client-side API integration, asynchronous JavaScript, DOM updates, error handling, and basic security hygiene for public frontend applications.

## Features

- Search weather by city or location name
- Current temperature and humidity
- Human-readable weather conditions
- Wind-speed display
- Enter-key and button search
- Graceful loading/error states
- No API key or secret required
- Static-site architecture suitable for GitHub Pages

## Architecture

```text
User search
    ↓
Open-Meteo Geocoding API
    ↓
Latitude / Longitude
    ↓
Open-Meteo Forecast API
    ↓
DOM-rendered current weather
```

## Run locally

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Project structure

```text
.
├── .github/workflows/static-site.yml
├── index.html
├── styles.css
├── script.js
└── weatherimg1.jpg
```

## Security

The current version does **not** embed a weather API key. Credentials, tokens, and private configuration should never be committed to a public frontend repository.

## Roadmap

- Add a multi-day forecast
- Add geolocation support
- Add unit tests for weather-code mapping
- Add GitHub Pages deployment


---

## Portfolio navigation

Explore the rest of my GitHub portfolio:

- [QOS-VIDEO](https://github.com/Likkhithhh/QOS-VIDEO) — machine-learning experiments for video-streaming QoS optimization
- [weatherAPP](https://github.com/Likkhithhh/weatherAPP) — browser weather dashboard using public APIs
- [pingSim](https://github.com/Likkhithhh/pingSim) — Python networking and latency simulator
- [lexgen](https://github.com/Likkhithhh/lexgen) — educational lexer-generator and compiler-design project
- [ATTENDENCEBOT](https://github.com/Likkhithhh/ATTENDENCEBOT) — face-recognition reference work for an attendance-system portfolio project
- **READS — North Karnataka Student Dropout Risk System** — Python/AI/ML internship project at Rural Education and Action Development Society (READS), 03 Aug–03 Sep 2026; focused on student-attribute analysis, preprocessing, dropout-risk prediction, model evaluation, and results
- **READS Karnataka Website** — organization website project built with HTML, CSS, and JavaScript; includes programme/project pages, board/member pages, donor and contact sections, images, and Firebase configuration

**GitHub:** [Likkhithhh](https://github.com/Likkhithhh)
