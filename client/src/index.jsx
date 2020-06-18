import React from 'react';
import ReactDOM from 'react-dom';

import MainViewer from './components/MainViewer.jsx';
// import Modal from './components/Modal.jsx';
import TourSchedule from './components/TourSchedule.jsx';

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
