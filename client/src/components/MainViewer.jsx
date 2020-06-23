import React from 'react';
import SaveButton from './SaveButton.jsx';
import svgPath from './svgPaths';
// props
const MainViewer = ({ home, toggleModal }) => (
  <div id="MainViewer">
    <SaveButton />
    <div id="gradient" />
    <img id="main-img" src="./images/main.jpg" alt="" onClick={toggleModal} />
    <div>
      <button type="button" id="galleryBtn" onClick={toggleModal}>
        <svg viewBox="0 0 32 32" id="gallerySvg">
          <path d={svgPath.gallery} />
        </svg>
        <div id="imgCount">{home.GalleryCount}</div>
      </button>
    </div>
  </div>
);

export default MainViewer;
