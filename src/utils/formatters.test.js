import { describe, it, expect } from 'vitest';
import { 
  formatTemperature, 
  formatDate, 
  formatTime,
  getWeatherIcon,
  isValidCity 
} from '../utils/formatters.js';

describe('Formatters Utility Functions', () => {
  describe('formatTemperature', () => {
    it('should format temperature with Celsius symbol', () => {
      expect(formatTemperature(25)).toBe('25°C');
      expect(formatTemperature(0)).toBe('0°C');
      expect(formatTemperature(-5)).toBe('-5°C');
    });
    
    it('should round temperature to nearest integer', () => {
      expect(formatTemperature(25.7)).toBe('26°C');
      expect(formatTemperature(25.3)).toBe('25°C');
      expect(formatTemperature(25.5)).toBe('26°C');
    });
    
    it('should handle null or undefined values', () => {
      expect(formatTemperature(null)).toBe('N/A');
      expect(formatTemperature(undefined)).toBe('N/A');
    });
  });
  
  describe('formatDate', () => {
    it('should format date to readable string', () => {
      const dateString = '2024-03-15';
      const result = formatDate(dateString);
      expect(result).toContain('Mar');
      expect(result).toContain('15');
    });
    
    it('should handle invalid date strings', () => {
      expect(formatDate('')).toBe('N/A');
      expect(formatDate(null)).toBe('N/A');
    });
  });
  
  describe('formatTime', () => {
    it('should format timestamp to time string', () => {
      const timestamp = '2024-03-15T14:30:00Z';
      const result = formatTime(timestamp);
      expect(result).toMatch(/\d{1,2}:\d{2}\s?(AM|PM)/i);
    });
    
    it('should handle invalid timestamps', () => {
      expect(formatTime('')).toBe('N/A');
      expect(formatTime(null)).toBe('N/A');
    });
  });
  
  describe('getWeatherIcon', () => {
    it('should return correct icon for sunny weather', () => {
      expect(getWeatherIcon('Sunny')).toBe('fa-sun');
      expect(getWeatherIcon('Clear')).toBe('fa-sun');
    });
    
    it('should return correct icon for cloudy weather', () => {
      expect(getWeatherIcon('Cloudy')).toBe('fa-cloud');
      expect(getWeatherIcon('Partly Cloudy')).toBe('fa-cloud');
    });
    
    it('should return correct icon for rainy weather', () => {
      expect(getWeatherIcon('Rain')).toBe('fa-cloud-rain');
      expect(getWeatherIcon('Drizzle')).toBe('fa-cloud-rain');
    });
    
    it('should return correct icon for snowy weather', () => {
      expect(getWeatherIcon('Snow')).toBe('fa-snowflake');
    });
    
    it('should return correct icon for stormy weather', () => {
      expect(getWeatherIcon('Thunderstorm')).toBe('fa-bolt');
      expect(getWeatherIcon('Storm')).toBe('fa-bolt');
    });
    
    it('should return default icon for unknown conditions', () => {
      expect(getWeatherIcon('Unknown')).toBe('fa-cloud');
      expect(getWeatherIcon('')).toBe('fa-cloud');
    });
  });
  
  describe('isValidCity', () => {
    it('should return true for valid city names', () => {
      expect(isValidCity('London')).toBe(true);
      expect(isValidCity('New York')).toBe(true);
    });
    
    it('should return false for empty or whitespace strings', () => {
      expect(isValidCity('')).toBe(false);
      expect(isValidCity('   ')).toBe(false);
    });
    
    it('should return false for null or undefined', () => {
      expect(isValidCity(null)).toBe(false);
      expect(isValidCity(undefined)).toBe(false);
    });
  });
});
