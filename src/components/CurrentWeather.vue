<template>
  <div class="weather-card">
    <div class="weather-header">
      <h2 class="city-name">{{ weatherData.city }}, {{ weatherData.country }}</h2>
      <p class="last-updated">Last updated: {{ formattedTime }}</p>
    </div>
    
    <div class="weather-main">
      <div class="temperature">{{ formattedTemp }}</div>
      
      <div class="condition">
        <i class="fas" :class="weatherIcon"></i>
        <div class="condition-text">{{ weatherData.condition }}</div>
      </div>
    </div>
    
    <div class="weather-details">
      <div class="detail-item">
        <div class="detail-label">
          <i class="fas fa-tint"></i> Humidity
        </div>
        <div class="detail-value">{{ weatherData.humidity }}%</div>
      </div>
      
      <div class="detail-item">
        <div class="detail-label">
          <i class="fas fa-wind"></i> Wind Speed
        </div>
        <div class="detail-value">{{ weatherData.windSpeed }} km/h</div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { formatTemperature, formatTime, getWeatherIcon } from '../utils/formatters.js';

export default {
  name: 'CurrentWeather',
  props: {
    weatherData: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const formattedTemp = computed(() => {
      return formatTemperature(props.weatherData.temperature);
    });
    
    const formattedTime = computed(() => {
      return formatTime(props.weatherData.lastUpdated);
    });
    
    const weatherIcon = computed(() => {
      return getWeatherIcon(props.weatherData.condition);
    });
    
    return {
      formattedTemp,
      formattedTime,
      weatherIcon
    };
  }
};
</script>
