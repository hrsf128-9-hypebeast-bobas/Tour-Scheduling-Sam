/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';

import MainViewer from './components/MainViewer.jsx';
import Modal from './components/Modal.jsx';
import TourSchedule from './components/TourSchedule.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState((prevState) => ({ modal: !prevState.modal }));
  }

  render() {
    const modalView = this.state;
    if (modalView.modal) {
      return (
        <div>
          <div id="modalContainer">
            <Modal toggleModal={this.toggleModal} />
          </div>
          <div id="centerCol">
            <MainViewer />
            <TourSchedule />
          </div>
        </div>
      );
    }
    return (
      <div id="centerCol">
        <MainViewer toggleModal={this.toggleModal} />
        <TourSchedule />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
