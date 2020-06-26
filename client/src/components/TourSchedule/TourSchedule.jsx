import React from 'react';
import Calendar from '../Calendar/Calendar.jsx'
import styles from './TourSchedule.css';

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
    this.setState({ tab: !this.state.tab });
  }

  render() {
    if (this.state.tab) {
      return (
        <div>
          <div>
            <button type="button" className={[styles.TourTab, styles.tabOn].join(' ')}>Schedule a Tour</button>
            <button type="button" className={[styles.TourTab, styles.tabOff].join(' ')} onClick={this.switchTabs}>Request Info</button>
          </div>
          <div className={styles.formdiv}>
            <form>
              <button type="button" className={[styles.typeRadio, styles.inPerson].join(' ')}>In-Person</button>
              <button type="button" className={[styles.typeRadio, styles.virtual].join(' ')}>Virtual</button>
              <Calendar />
              <input type="text" className={[styles.text, styles.input50, styles.left].join(' ')} placeholder="Name" />
              <input type="text" className={[styles.text, styles.input50, styles.right].join(' ')} placeholder="Phone" />
              <input type="text" className={[styles.text, styles.input100].join(' ')} placeholder="Email" />
              <div className={styles.checkboxDiv}>
                <input type="checkbox" className={styles.checkbox} />
                <label htmlFor="checkbox" className={styles.checkboxLabel}>I want to talk about financing</label>
              </div>
              <button type="button" className={[styles.schedule, styles.input100].join(' ')}>Schedule a Tour</button>
              <div className={styles.disclaimer}>
                By pressing Schedule a Tour, you agree that Trulia and real estate professionals may contact you via phone/text about your inquiry, which may involve the use of automated means. You are not required to consent as a condition of purchasing any property, goods or services. Message/data rates may apply. You also agree to our
                <a target="_blank" rel="noreferrer" href="https://www.trulia.com/terms">Terms of Use.</a>
                Trulia does not endorse any real estate professionals.
              </div>
            </form>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div>
          <button type="button" className={[styles.TourTab, styles.tabOff].join(' ')} onClick={this.switchTabs}>Schedule a Tour</button>
          <button type="button" className={[styles.TourTab, styles.tabOn].join(' ')}>Request Info</button>
        </div>
        <div className={styles.formdiv}>
          <form>
            <input type="text" className={[styles.text, styles.input50, styles.left].join(' ')} placeholder="Name" />
            <input type="text" className={[styles.text, styles.input50, styles.right].join(' ')} placeholder="Phone" />
            <input type="text" className={[styles.text, styles.input100].join(' ')} placeholder="Email" />
            <div>
              <textarea className={styles.textarea} defaultValue={`I am interested in ${this.props.home.Address}`} />
            </div>
            <button type="button" className={[styles.schedule, styles.input100].join(' ')}>Request Info</button>
            <div className={styles.disclaimer}>
              By pressing Request Info, you agree that Trulia and real estate professionals may contact you via phone/text about your inquiry, which may involve the use of automated means. You are not required to consent as a condition of purchasing any property, goods or services. Message/data rates may apply. You also agree to our
              <a target="_blank" rel="noreferrer" href="https://www.trulia.com/terms">Terms of Use.</a>
              Trulia does not endorse any real estate professionals.
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TourSchedule;
