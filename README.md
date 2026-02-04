# Weather Dashboard

A modern, responsive Vue.js application for viewing current weather and 5-day forecasts for any city.

## Features

### ✅ Current Weather Display
- City name and country
- Current temperature in Celsius
- Weather condition with dynamic icon
- Humidity percentage
- Wind speed
- Last updated timestamp

### ✅ 5-Day Forecast
- Date display
- Minimum and maximum temperatures
- Weather condition with icon
- Responsive grid layout

### ✅ Interactive Features
- City search functionality
- Refresh button to update data without page reload
- Loading states with spinner animation
- Error handling with user-friendly messages

### ✅ State Management
- Current city input state
- Current weather response state
- Forecast response state
- Loading state
- Error state

### ✅ Testing
- Unit tests for utility functions (temperature formatting, date formatting, icon selection)
- Component tests for loading, error, and data display states

## Technology Stack

- **Vue.js 3** - Progressive JavaScript framework
- **Vite** - Next generation frontend tooling
- **Vitest** - Fast unit test framework
- **Vue Test Utils** - Official testing utilities for Vue
- **Font Awesome** - Icon library
- **CSS3** - Modern styling with gradients and animations

## Project Structure

```
weather-dashboard/
├── src/
│   ├── components/
│   │   ├── CurrentWeather.vue      # Current weather display
│   │   ├── ForecastDisplay.vue     # 5-day forecast display
│   │   ├── SearchBar.vue           # Search and refresh controls
│   │   ├── LoadingSpinner.vue      # Loading state component
│   │   ├── ErrorMessage.vue        # Error display component
│   │   └── components.test.js      # Component unit tests
│   ├── services/
│   │   └── weatherService.js       # API service layer
│   ├── utils/
│   │   ├── formatters.js           # Utility functions
│   │   └── formatters.test.js      # Utility function tests
│   ├── App.vue                     # Main application component
│   ├── main.js                     # Application entry point
│   └── style.css                   # Global styles
├── index.html                      # HTML entry point
├── package.json                    # Project dependencies
├── vite.config.js                  # Vite configuration
└── README.md                       # Project documentation
```

## Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Steps

1. **Extract the project folder**
   ```bash
   unzip weather-dashboard.zip
   cd weather-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

4. **Run tests**
   ```bash
   npm run test
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## Usage

1. **Search for a City**
   - Enter a city name in the search box
   - Click the "Search" button or press Enter
   - The application will display current weather and 5-day forecast

2. **Refresh Weather Data**
   - After searching for a city, click the "Refresh" button
   - The application will fetch updated data without reloading the page

3. **View Weather Information**
   - Current weather card shows temperature, condition, humidity, and wind speed
   - Forecast section displays 5 days with min/max temperatures and conditions

## API Endpoints

The application uses JSONBin.io for mock weather data:

- **Current Weather**: `https://api.jsonbin.io/v3/b/6981949143b1c97be9616e06`
- **5-Day Forecast**: `https://api.jsonbin.io/v3/b/698194e3d0ea881f409cdb34`
- **Error Response**: `https://api.jsonbin.io/v3/b/69819517ae596e708f0d49ff`

## Testing

The project includes comprehensive unit and component tests:

### Unit Tests (formatters.test.js)
- `formatTemperature()` - Temperature formatting with °C
- `formatDate()` - Date formatting to readable strings
- `formatTime()` - Time formatting with AM/PM
- `getWeatherIcon()` - Weather condition to icon mapping
- `isValidCity()` - City name validation

### Component Tests (components.test.js)
- **LoadingSpinner** - Renders spinner and displays loading message
- **ErrorMessage** - Displays error messages with icon
- **CurrentWeather** - Renders weather data correctly

### Running Tests
```bash
# Run all tests
npm run test

# Run tests with UI
npm run test:ui
```

## Code Quality

- **Clean Code**: Modular component structure with single responsibility
- **Comments**: Comprehensive JSDoc comments for all functions
- **Error Handling**: Try-catch blocks for API calls with user feedback
- **Responsive Design**: Mobile-first approach with media queries
- **Accessibility**: Semantic HTML and ARIA labels
- **Modern JavaScript**: ES6+ features (async/await, arrow functions, destructuring)

## Features Highlight

### State Management
The application uses Vue 3's Composition API with reactive state:
- `ref()` for reactive data
- `computed()` for derived state
- Props and emits for component communication

### Refresh Without Reload
The refresh functionality uses the existing city state to fetch fresh data without page navigation, providing a seamless user experience.

### Dynamic Icons
Weather conditions are mapped to appropriate Font Awesome icons dynamically based on the condition string.

### Error Boundaries
Comprehensive error handling ensures the app remains functional even when API calls fail.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

Potential improvements for the application:
- Multiple city comparison
- Geolocation support for current location
- Weather alerts and notifications
- Temperature unit toggle (°C/°F)
- Historical weather data
- Favorite cities list
- Dark mode theme
- Weather maps integration

## License

This project is created for assessment purposes.

## Contact

For questions or issues, please reach out to the development team.

---

**Note**: This application uses mock API endpoints for demonstration purposes. In a production environment, replace these with real weather API endpoints (e.g., OpenWeatherMap, WeatherAPI).
