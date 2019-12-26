import React from 'react';
import './forecast.css';
import { Day } from './Day';

export class Forecast extends React.Component {
  render() {
    const { weatherData } = this.props;
    console.log(weatherData);
    return (
      <div className='forecast-wrapper'>
        {
          weatherData.map((day, index) => <Day dayData={day} key={index} />)
        }
      </div>
    );
  }
}