/* eslint-disable import/extensions */
import React from 'react';
import svgPath from '../../utils/svgPaths';
import TourSchedule from '../TourSchedule/TourSchedule.jsx';
import SaveButton from '../SaveButton/SaveButton.jsx';
import styles from './Modal.css';

const formatPrice = (num) => {
  const arr = num.split('').reverse();
  arr.splice(3, 0, ',');
  if (num.length > 6) {
    arr.splice(7, 0, ',');
  }
  return `$${arr.reverse().join('')}`;
};

const Modal = ({ toggleModal, home }) => (
  <div className={styles.modal}>
    <div className={styles.modalHeader}>
      <span>
        {`${home.Address} `}
      </span>
      <span>
        | {formatPrice(JSON.stringify(home.Price))}
      </span>
      <span> | 5 Bed 5 Bath</span>
      <div className={styles.modalButtons}>
        <SaveButton />
        <svg viewBox="0 0 32 32" className={styles.close} onClick={toggleModal}>
          <path d={svgPath.close} />
        </svg>
      </div>
    </div>
    <div className={styles.modalBody}>
      <div className={styles.gallery}>
        Gallery
      </div>
      <div className={styles.tourscheduleContainer}>
        <TourSchedule home={home} />
      </div>
    </div>
  </div>
);

export default Modal;
