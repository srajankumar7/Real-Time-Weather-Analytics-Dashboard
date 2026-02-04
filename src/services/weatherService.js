const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';

export async function getCurrentWeather(city) {
  const res = await fetch(
    `${BASE_URL}/current.json?key=${API_KEY}&q=${city}`
  );
  if (!res.ok) throw new Error('Current weather failed');

  const data = await res.json();

  return {
    city: data.location.name,
    country: data.location.country,
    temperature: data.current.temp_c,
    condition: data.current.condition.text,
    humidity: data.current.humidity,
    windSpeed: data.current.wind_kph,
    lastUpdated: data.current.last_updated
  };
}

export async function getForecast(city) {
  const res = await fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=5`
  );
  if (!res.ok) throw new Error('Forecast failed');

  const data = await res.json();

  return data.forecast.forecastday.map(day => ({
    date: day.date,
    condition: day.day.condition.text,
    maxTemp: day.day.maxtemp_c,
    minTemp: day.day.mintemp_c
  }));
}

export async function getWeatherData(city) {
  const current = await getCurrentWeather(city);
  const forecast = await getForecast(city);
  return { current, forecast };
}
