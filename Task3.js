let weatherData = [];

function addCityWeather(cityName, temperature, condition) {
    weatherData.push({cityName, temperature, condition});
}

function findHottestCity() {
    if (weatherData.length === 0) {
        return null;
    }
    const hotTemperature = Math.max(...weatherData.map(city => city.temperature));
    return weatherData.find(city => city.temperature === hotTemperature);
}

function filterByCondition(condition){
    return weatherData.filter((city) => city.condition === condition);
}

function cityNamesWithTemperatures() {
    return weatherData.map(city => `City: ${city.cityName}, Temp: ${city.temperature}°C`);
}

function allWeatherData() {
    weatherData.forEach(city => {
        console.log(`City: ${city.cityName}, Temp: ${city.temperature}°C, Condition: ${city.condition}`);
    });
}

addCityWeather("Jamnagar", 18, "Sunny");
addCityWeather("Changa", 15, "Cloudy");
addCityWeather("New York", -1, "Motly Cloud");
addCityWeather("Canada", -9, "Cloudy");

console.log("Hottest Cities:");
console.log(findHottestCity());
console.log();

console.log("Filter By Condition:");
console.log(filterByCondition("Cloudy"));
console.log();

console.log("CityName with Temperature");
console.log(cityNamesWithTemperatures());
console.log();

console.log("All Weather Data: ");
allWeatherData();