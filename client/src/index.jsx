/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import MainViewer from './components/MainViewer/MainViewer.jsx';
import Modal from './components/Modal/Modal.jsx';
import TourSchedule from './components/TourSchedule/TourSchedule.jsx';
import styles from './main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      home: {
        GalleryCount: 0,
      },
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
          <div className={styles.modalContainer}>
            <Modal toggleModal={this.toggleModal} home={this.state.home} />
          </div>
          <div className={styles.centerCol}>
            <MainViewer home={this.state.home} />
            <div className={styles.tourbox}>
              <TourSchedule home={this.state.home} />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className={styles.centerCol}>
        <MainViewer toggleModal={this.toggleModal} home={this.state.home} />
        <div className={styles.tourbox}>
          <TourSchedule home={this.state.home} />
        </div>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('TourSchedule'));
