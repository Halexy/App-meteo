import './App.css';

import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'weather-icons/css/weather-icons.css'

import Weather from './app_component/weather.component';

// api call api.openweathermap.org/data/2.5/weather?q=London,uk
const API_key = '017e59d8f2561031d8cd3c857a1b9b47';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error : false
    };
    this.getWeather();
  }

  getWeather = async () => {
  const api_call = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Paris,fr&units=metric&lang=fr&appid=${API_key}`
  );

  const response = await api_call.json();

  console.log(response);

  this.setState({
    city: response.name,
    country: response.sys.country,
    celsius: Math.round(response.main.temp),
    temp_max: Math.round(response.main.temp_max),
    temp_min: Math.round(response.main.temp_min),
    description: response.weather[0].description,

  })

};

render(){
  return(
    <div className="App">
    <Weather 
      city={this.state.city} 
      country={this.state.country} 
      temp_celsius={this.state.celsius}
      temp_min={this.state.temp_min}
      temp_max={this.state.temp_max}
      description={this.state.description}
    />
    </div>
  )
}

}

export default App;
