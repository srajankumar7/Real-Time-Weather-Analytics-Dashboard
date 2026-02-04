/**
 * Formats a temperature value to display with unit
 * @param {number} temp - Temperature in Celsius
 * @returns {string} Formatted temperature string
 */
export function formatTemperature(temp) {
  if (temp === null || temp === undefined) {
    return 'N/A';
  }
  return `${Math.round(temp)}°C`;
}

/**
 * Formats a date string to a readable format
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date string
 */
export function formatDate(dateString) {
  if (!dateString) {
    return 'N/A';
  }
  
  const date = new Date(dateString);
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

/**
 * Formats a timestamp to a readable time format
 * @param {string} timestamp - ISO timestamp string
 * @returns {string} Formatted time string
 */
export function formatTime(timestamp) {
  if (!timestamp) {
    return 'N/A';
  }
  
  const date = new Date(timestamp);
  const options = { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  };
  return date.toLocaleTimeString('en-US', options);
}

/**
 * Gets the appropriate weather icon based on condition
 * @param {string} condition - Weather condition
 * @returns {string} Font Awesome icon class
 */
export function getWeatherIcon(condition) {
  if (!condition) {
    return 'fa-cloud';
  }
  
  const conditionLower = condition.toLowerCase();
  
  if (conditionLower.includes('sun') || conditionLower.includes('clear')) {
    return 'fa-sun';
  } else if (conditionLower.includes('cloud')) {
    return 'fa-cloud';
  } else if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
    return 'fa-cloud-rain';
  } else if (conditionLower.includes('snow')) {
    return 'fa-snowflake';
  } else if (conditionLower.includes('thunder') || conditionLower.includes('storm')) {
    return 'fa-bolt';
  } else if (conditionLower.includes('mist') || conditionLower.includes('fog')) {
    return 'fa-smog';
  } else if (conditionLower.includes('wind')) {
    return 'fa-wind';
  }
  
  return 'fa-cloud';
}

/**
 * Validates if a city name is valid
 * @param {string} city - City name to validate
 * @returns {boolean} True if valid, false otherwise
 */
export function isValidCity(city) {
  return city && city.trim().length > 0;
}
