/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import MainViewer from './components/MainViewer.jsx';
import Modal from './components/Modal.jsx';
import TourSchedule from './components/TourSchedule.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      home: {},
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/listings')
      .then((results) => {
        this.setState({ home: results.data[0] });
      });
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
            <Modal toggleModal={this.toggleModal} home={this.state.home} />
          </div>
          <div id="centerCol">
            <MainViewer home={this.state.home} />
            <TourSchedule />
          </div>
        </div>
      );
    }
    return (
      <div id="centerCol">
        <MainViewer toggleModal={this.toggleModal} home={this.state.home} />
        <TourSchedule />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
