import React from 'react';
import ReactDOM from 'react-dom';

import MainViewer from './components/MainViewer';
// import Modal from './components/Modal';
import TourSchedule from './components/TourSchedule';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // modal: false,

    };
  }

  render() {
    return (
      <div>
        <MainViewer />
        <TourSchedule />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
