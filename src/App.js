import React from 'react';
import './App.css';
import { getWeatherData } from './data/dataManager';
import { Forecast } from './components/Forecast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: [],
    };
  }

  componentDidMount() {
    getWeatherData()
      .then(result => {
        const forecast = [];
        for (let i = 0; i < Math.min(7, result.length); i++) {
          forecast.push(result[i]);
        }

        this.setState({
          weatherData: forecast
        });
      });
  }

  render() {
    const { weatherData } = this.state;
    return (
      <div className="App">
        <Forecast weatherData={weatherData} />
      </div>
    );
  }
}

export default App;
