<template>
  <div>
    <!-- Header -->
    <header class="header">
      <h1>
        <i class="fas fa-cloud-sun"></i>
        Weather Dashboard
      </h1>
      <p>Get real-time weather updates for any city</p>
    </header>
    
    <!-- Search Bar -->
    <SearchBar 
      :loading="loading"
      :hasData="hasWeatherData"
      @search="handleSearch"
      @refresh="handleRefresh"
    />
    
    <!-- Error Message -->
    <ErrorMessage 
      v-if="error"
      :message="error"
    />
    
    <!-- Loading Spinner -->
    <LoadingSpinner 
      v-if="loading"
      message="Fetching weather data..."
    />
    
    <!-- Weather Content -->
    <template v-if="!loading && currentWeather && forecast">
      <!-- Current Weather -->
      <CurrentWeather :weatherData="currentWeather" />
      
      <!-- 5-Day Forecast -->
      <ForecastDisplay :forecastData="forecast" />
    </template>
    
    <!-- Welcome Message -->
    <div v-if="!loading && !currentWeather && !error" class="weather-card" style="text-align: center;">
      <i class="fas fa-search-location" style="font-size: 4rem; color: #667eea; margin-bottom: 20px;"></i>
      <h2>Welcome to Weather Dashboard</h2>
      <p style="color: #666; margin-top: 10px;">Enter a city name above to get started</p>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import SearchBar from './components/SearchBar.vue';
import CurrentWeather from './components/CurrentWeather.vue';
import ForecastDisplay from './components/ForecastDisplay.vue';
import LoadingSpinner from './components/LoadingSpinner.vue';
import ErrorMessage from './components/ErrorMessage.vue';
import { getWeatherData } from './services/weatherService.js';

export default {
  name: 'App',
  components: {
    SearchBar,
    CurrentWeather,
    ForecastDisplay,
    LoadingSpinner,
    ErrorMessage
  },
  setup() {
    // State management
    const currentCity = ref('');
    const currentWeather = ref(null);
    const forecast = ref(null);
    const loading = ref(false);
    const error = ref(null);
    
    // Computed property to check if we have weather data
    const hasWeatherData = computed(() => {
      return currentWeather.value !== null && forecast.value !== null;
    });
    
    /**
     * Fetches weather data for a given city
     * @param {string} city - City name to fetch weather for
     */
    const fetchWeatherData = async (city) => {
      loading.value = true;
      error.value = null;
      
      try {
        const data = await getWeatherData(city);
        
        // Update state with fetched data
        currentWeather.value = data.current;
        forecast.value = data.forecast;
        currentCity.value = city;
      } catch (err) {
        error.value = 'Failed to fetch weather data. Please try again later.';
        console.error('Error:', err);
      } finally {
        loading.value = false;
      }
    };
    
    /**
     * Handles search action from SearchBar component
     * @param {string} city - City name to search
     */
    const handleSearch = (city) => {
      fetchWeatherData(city);
    };
    
    /**
     * Handles refresh action - refetches data for current city
     */
    const handleRefresh = () => {
      if (currentCity.value) {
        fetchWeatherData(currentCity.value);
      }
    };
    
    return {
      currentWeather,
      forecast,
      loading,
      error,
      hasWeatherData,
      handleSearch,
      handleRefresh
    };
  }
};
</script>
