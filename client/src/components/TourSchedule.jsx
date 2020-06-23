import React from 'react';

class TourSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // True = Schedule a Tour
      // False = Request Info
      tab: true,
    };

    this.switchTabs = this.switchTabs.bind(this);
  }

  switchTabs() {
    this.setState({tab: !this.state.tab});
  }

  render() {
    let tab1;
    let tab2;
    if (this.state.tab) {
      tab1 = 'tab1On';
      tab2 = 'tab2Off';
    } else {
      tab1 = 'tab1Off';
      tab2 = 'tab2On';
    }

    return (
      <div id="TourComponent">
        <div>
          <button type="button" className="TourTab" id={tab1} onClick={this.switchTabs}>Schedule a Tour</button>
          <button type="button" className="TourTab" id={tab2} onClick={this.switchTabs}>Request Info</button>
        </div>
        <div id="formdiv">
          <form>
            <button type="button" className="type-radio" id="inPersonOn">In-Person</button>
            <button type="button" className="type-radio" id="Virtual">Virtual</button>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Email" />
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">I want to talk about financing</label>
            <button type="button">Schedule a Tour</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TourSchedule;
