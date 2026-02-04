import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import ErrorMessage from '../components/ErrorMessage.vue';
import CurrentWeather from '../components/CurrentWeather.vue';

describe('LoadingSpinner Component', () => {
  it('should render loading spinner', () => {
    const wrapper = mount(LoadingSpinner);
    
    // Check if spinner element exists
    expect(wrapper.find('.spinner').exists()).toBe(true);
    expect(wrapper.find('.loading').exists()).toBe(true);
  });
  
  it('should display default loading message', () => {
    const wrapper = mount(LoadingSpinner);
    
    expect(wrapper.text()).toContain('Loading weather data...');
  });
  
  it('should display custom loading message when provided', () => {
    const customMessage = 'Fetching forecast...';
    const wrapper = mount(LoadingSpinner, {
      props: {
        message: customMessage
      }
    });
    
    expect(wrapper.text()).toContain(customMessage);
  });
});

describe('ErrorMessage Component', () => {
  it('should render error message', () => {
    const errorText = 'Failed to fetch weather data';
    const wrapper = mount(ErrorMessage, {
      props: {
        message: errorText
      }
    });
    
    expect(wrapper.find('.error').exists()).toBe(true);
    expect(wrapper.text()).toContain(errorText);
  });
  
  it('should display error icon', () => {
    const wrapper = mount(ErrorMessage, {
      props: {
        message: 'Test error'
      }
    });
    
    expect(wrapper.html()).toContain('fa-exclamation-circle');
  });
});

describe('CurrentWeather Component', () => {
  const mockWeatherData = {
    city: 'London',
    country: 'UK',
    temperature: 22,
    condition: 'Sunny',
    humidity: 65,
    windSpeed: 15,
    lastUpdated: '2024-03-15T14:30:00Z'
  };
  
  it('should render weather data correctly', () => {
    const wrapper = mount(CurrentWeather, {
      props: {
        weatherData: mockWeatherData
      }
    });
    
    expect(wrapper.text()).toContain('London, UK');
    expect(wrapper.text()).toContain('22°C');
    expect(wrapper.text()).toContain('Sunny');
    expect(wrapper.text()).toContain('65%');
    expect(wrapper.text()).toContain('15 km/h');
  });
  
  it('should display city and country in header', () => {
    const wrapper = mount(CurrentWeather, {
      props: {
        weatherData: mockWeatherData
      }
    });
    
    const cityName = wrapper.find('.city-name');
    expect(cityName.exists()).toBe(true);
    expect(cityName.text()).toBe('London, UK');
  });
  
  it('should display weather details', () => {
    const wrapper = mount(CurrentWeather, {
      props: {
        weatherData: mockWeatherData
      }
    });
    
    const details = wrapper.findAll('.detail-item');
    expect(details.length).toBeGreaterThan(0);
    
    // Check humidity detail
    expect(wrapper.text()).toContain('Humidity');
    expect(wrapper.text()).toContain('65%');
    
    // Check wind speed detail
    expect(wrapper.text()).toContain('Wind Speed');
    expect(wrapper.text()).toContain('15 km/h');
  });
});
