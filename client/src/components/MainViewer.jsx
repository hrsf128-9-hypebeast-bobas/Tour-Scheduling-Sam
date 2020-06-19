import React from 'react';
import SaveButton from './SaveButton.jsx';
// props
const MainViewer = (props) => (
  <div id="MainViewer">
    <SaveButton />
    <div id="gradient" />
    <img id="main-img" src="./images/main.jpg" alt="" onClick={props.toggleModal} />
    <div>
      <button type="button" id="galleryBtn" onClick={props.toggleModal}>
        <svg viewBox="0 0 32 32" id="gallerySvg">
          <path d="M6.65 20.335l4.305-4.784 3.519 3.22 5.949-7.848 4.847 8.143V6.65H6.65v13.685zm0 3.976v.959h18.62v-1.003l-5.113-8.59-5.326 7.027-3.693-3.38-4.488 4.987zM27.93 3.99v23.94H3.99V3.99h23.94zM13.965 13.3a1.995 1.995 0 1 1 0-3.99 1.995 1.995 0 0 1 0 3.99z" />
        </svg>
        <div id="imgCount">57</div>
      </button>
    </div>
  </div>
);

export default MainViewer;
