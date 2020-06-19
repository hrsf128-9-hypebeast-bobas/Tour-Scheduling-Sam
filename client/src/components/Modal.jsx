/* eslint-disable import/extensions */
import React from 'react';
// import TourSchedule from './TourSchedule.jsx'
import SaveButton from './SaveButton.jsx';

// props
const Modal = ({toggleModal}) => (
  <div id="modal">
    <div id="modalHeader">
      <span> Address</span>
      <span> | Price</span>
      <span> | Bed & Bath</span>
      <div id="modalButtons">
        <SaveButton />
      </div>
    </div>
    <div id="modalBody">
      <div id="gallery">
        Gallery
      </div>
      <div id="tourschedule-container">
        Tour Schedule
      </div>
    </div>
    <button type="button" onClick={toggleModal}>
      close
    </button>
  </div>
);

export default Modal;
