## Objective
Use Angular’s HttpClient to make AJAX invocations.

### Task
- Call on external API openweathermap (https://openweathermap.org) which returns the weather for a given city.
- Write an Angular service which takes a city’s name and return the weather of that city.
- Use the weather service in a simple application which requires user city input.

### API Call and Response
URL = https://api.openweathermap.org/data/2.5/weather?q=singapore&units=metric&appid={API_Key}
```
{
  "coord": {
    "lon": 103.8501,
    "lat": 1.2897
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 26.81,
    "feels_like": 29.58,
    "temp_min": 26.72,
    "temp_max": 27.02,
    "pressure": 1010,
    "humidity": 83
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.06,
    "deg": 340
  },
  "clouds": {
    "all": 75
  },
  "dt": 1680282048,
  "sys": {
    "type": 2,
    "id": 265581,
    "country": "SG",
    "sunrise": 1680303888,
    "sunset": 1680347534
  },
  "timezone": 28800,
  "id": 1880252,
  "name": "Singapore",
  "cod": 200
}
```