import React from 'react';
import SaveButton from '../SaveButton/SaveButton.jsx';
import svgPath from '../../utils/svgPaths';
import styles from './MainViewer.css';
// props
const MainViewer = ({ home, toggleModal }) => (
  <div className={styles.MainViewer}>
    <div className={styles.buttonWrapper}>
      <SaveButton />
    </div>
    <div className={styles.gradient} />
    <img className={styles.mainImg} src={home.MainImg} alt="" onClick={toggleModal} />
    <div>
      <button type="button" className={styles.galleryBtn} onClick={toggleModal}>
        <svg viewBox="0 0 32 32" className={styles.gallerySvg}>
          <path d={svgPath.gallery} />
        </svg>
        <div className={styles.imgCount}>{home.GalleryCount}</div>
      </button>
    </div>
  </div>
);

export default MainViewer;
