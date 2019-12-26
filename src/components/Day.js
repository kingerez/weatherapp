import React from 'react';
import { getDay, dateParser } from '../data/dataManager';
import './day.css';

export class Day extends React.Component {
  constructor(props) {
    super(props);

    const { dt, main: { temp } } = props.dayData;

    const day = dateParser(dt).getDay();

    this.state = {
      day: getDay(day),
      temp
    };
  }

  render() {
    const { day, temp } = this.state;
    return (
      <div className='day'>
        <div>{day}</div>
        <div>{temp}</div>
      </div>
    );
  }
}