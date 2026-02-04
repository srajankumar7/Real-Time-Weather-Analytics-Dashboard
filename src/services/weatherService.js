const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';

/**
 * Fetch current weather
 */
export async function getCurrentWeather(city) {
  const res = await fetch(
    `${BASE_URL}/current.json?key=${API_KEY}&q=${city}&aqi=no`
  );

  if (!res.ok) {
    const err = await res.text();
    console.error('Current weather API error:', err);
    throw new Error('Current weather failed');
  }

  const data = await res.json();

  return {
    city: data.location.name,
    country: data.location.country,
    temperature: Math.round(data.current.temp_c),
    condition: data.current.condition.text,
    humidity: data.current.humidity,
    windSpeed: Math.round(data.current.wind_kph),

    // ✅ FIX: always update time on search / refresh
    lastUpdated: new Date().toISOString()
  };
}

/**
 * Fetch 5-day forecast
 */
export async function getForecast(city) {
  const res = await fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=5`
  );

  if (!res.ok) {
    const err = await res.text();
    console.error('Forecast API error:', err);
    throw new Error('Forecast failed');
  }

  const data = await res.json();

  return data.forecast.forecastday.map(day => ({
    date: day.date,
    condition: day.day.condition.text,
    maxTemp: Math.round(day.day.maxtemp_c),
    minTemp: Math.round(day.day.mintemp_c)
  }));
}

/**
 * Fetch combined weather data
 */
export async function getWeatherData(city) {
  const current = await getCurrentWeather(city);
  const forecast = await getForecast(city);
  return { current, forecast };
}
