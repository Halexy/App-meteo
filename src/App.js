import './App.css';

import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';

import Weather from './app_component/weather.component';
import Form from './app_component/form.component';

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

    this.weatherIcon = {
        Thunderstorm: "wi-thunderstorm",
        Drizzle: "wi-sleet",
        Rain: "wi-storm-showers",
        Snow: "wi-snow",
        Atmosphere: "wi-fog",
        Clear: "wi-day-sunny",
        Clouds: "wi-day-fog"
    };
  }

  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }

  get_WeatherIcon(icons, rangeId){
      switch(true){
        case rangeId >= 200 && rangeId <= 232:
            this.setState({icon: this.weatherIcon.Thunderstorm})
            break;
        case rangeId >= 300 && rangeId <= 321:
            this.setState({icon: this.weatherIcon.Drizzle})
            break;
        case rangeId >= 500 && rangeId <= 531:
            this.setState({icon: this.weatherIcon.Rain})
            break;
        case rangeId >= 600 && rangeId <= 622:
            this.setState({icon: this.weatherIcon.Snow})
            break;
        case rangeId >= 701 && rangeId <= 781:
            this.setState({icon: this.weatherIcon.Atmosphere})
            break;
        case rangeId === 800:
            this.setState({icon: this.weatherIcon.Clear})
            break;
        case rangeId >= 801 && rangeId <= 804:
            this.setState({icon: this.weatherIcon.Clouds})
            break;
        default:
            this.setState({icon: this.weatherIcon.Clouds})
      }
  }

getWeather = async (e) => {

    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if(city && country) {

        const api_call = await fetch
        (
            `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&lang=fr&appid=${API_key}`
        );
        
        const response = await api_call.json();
        
          if (typeof response.main != "undefined") {
            document.getElementById('weather').style = 'display:block'; 

            this.setState (
                {
                city: `${response.name}, ${response.sys.country}`,
                celsius: Math.round(response.main.temp),
                temp_max: Math.round(response.main.temp_max),
                temp_min: Math.round(response.main.temp_min),
                description: response.weather[0].description,
                error: false
                });
        
            this.get_WeatherIcon(this.weatherIcon, response.weather[0]);

          } else {
            this.setState({error:true});
            document.getElementById('weather').style = 'display:none'; 
            }

    } else {
        this.setState({error:true});
    }

};

render(){
  return(
    <div className="App py-5">
        <div 
        className="form-weather col-8 col-lg-4 shadow mx-auto my-5"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        >
            <Form loadweather={this.getWeather} error={this.state.error} />
            <div id="weather">
                <Weather
                city={this.state.city} 
                country={this.state.country} 
                temp_celsius={this.state.celsius}
                temp_min={this.state.temp_min}
                temp_max={this.state.temp_max}
                description={this.state.description}
                weatherIcon={this.state.icon}
                />
            </div>

        </div>

    </div>
  )
}

}

export default App;
