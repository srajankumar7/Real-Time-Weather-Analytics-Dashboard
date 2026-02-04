<template>
  <div class="forecast-section">
    <h3 class="forecast-title">5-Day Forecast</h3>
    
    <div class="forecast-grid">
      <div 
        v-for="day in forecastData" 
        :key="day.date"
        class="forecast-card"
      >
        <div class="forecast-date">{{ formatDate(day.date) }}</div>
        <i class="fas forecast-icon" :class="getWeatherIcon(day.condition)"></i>
        <div class="forecast-condition">{{ day.condition }}</div>
        <div class="forecast-temps">
          <span class="temp-max">{{ formatTemperature(day.maxTemp) }}</span>
          <span class="temp-min">{{ formatTemperature(day.minTemp) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate, formatTemperature, getWeatherIcon } from '../utils/formatters.js';

export default {
  name: 'ForecastDisplay',
  props: {
    forecastData: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {
      formatDate,
      formatTemperature,
      getWeatherIcon
    };
  }
};
</script>
