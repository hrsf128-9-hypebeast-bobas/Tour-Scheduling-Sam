import React from 'react';
// props
const MainViewer = () => (
  <div id="MainViewer">
    <div id="btnDiv">
      <button type="button" className="headerbtn">
        <svg viewBox=" 0 0 32 32">
          <path d="M26.95 11.863a5.214 5.214 0 0 0-8.908-3.677l-1.908 1.908-1.906-1.908a5.214 5.214 0 1 0-7.377 7.366l1.912 1.913 7.371 7.373 7.373-7.373 1.912-1.912a5.193 5.193 0 0 0 1.53-3.69zM16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.913-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z" />
        </svg>
        <div className="btnText">Save</div>
      </button>
      <button type="button" id="shareBtn" className="headerbtn">
        <svg viewBox="0 0 32 32">
          <path d="M17.29 7.2v14.285h-2.66V7.201l-3.99 3.99L8.76 9.31l7.2-7.2 7.2 7.2-1.88 1.88-3.99-3.99zm5.32 9.298h-2.66v-2.66h5.32v15.295H6.65V13.838h5.32v2.66H9.31v9.975h13.3v-9.975z" />
        </svg>
        <div className="btnText">Share</div>
      </button>
    </div>
    <div id="gradient" />
    <img id="main-img" src="./images/main.jpg" alt="" />
  </div>
);

export default MainViewer;
