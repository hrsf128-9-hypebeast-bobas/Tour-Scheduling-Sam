/* eslint-disable import/extensions */
import React from 'react';
import svgPath from './svgPaths';
// import TourSchedule from './TourSchedule.jsx'
import SaveButton from './SaveButton.jsx';

// 6532000
// 6,532,000

const formatPrice = (num) => {
  const arr = num.split('').reverse();
  arr.splice(3, 0, ',');
  if (num.length > 6) {
    arr.splice(7, 0, ',');
  }
  return '$' + arr.reverse().join('');
};

// props
const Modal = ({ toggleModal, home }) => (
  <div id="modal">
    <div id="modalHeader">
      <span>
        {`${home.Address} `}
      </span>
      <span>
        | {formatPrice(JSON.stringify(home.Price))}
      </span>
      <span> | 5 Bed 5 Bath</span>
      <div id="modalButtons">
        <SaveButton />
        <svg viewBox="0 0 32 32" id="close" onClick={toggleModal}>
          <path d={svgPath.close} />
        </svg>
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
  </div>
);

export default Modal;
