import React from 'react';
import moment from 'moment';
import svgPath from '../../utils/svgPaths';
import styles from './Calendar.css';

let days = [];

// formats dates from moment.js
for (let i = 0; i <= 3; i++) {
  let obj = {};
  let format = moment().add(i, 'days').format('dddd Do MMMM');
  format = format.split(' ');
  obj.day = format[0].slice(0, 3);
  obj.date = format[1].slice(0, format[1].length - 2);
  obj.month = format[2].slice(0, 3);
  days.push(obj);
}

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false,
    };
  }

  render() {
    return (
      <div className={styles.calendarDiv}>
        {days.map(item => <CalendarElement date={item} />)}
      </div>
    );
  }
}

const CalendarElement = ({ date }) => (
  <div className={styles.calendarElement}>
    <button type="button" className={styles.calendarButton}>
      <div id="calendarDay">{date.day}</div>
      <div className={styles.calendarDate}>{date.date}</div>
      <div id="calendarMonth">{date.month}</div>
    </button>
  </div>
);

export default Calendar;
