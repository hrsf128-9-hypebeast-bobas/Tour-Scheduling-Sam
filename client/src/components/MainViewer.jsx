import React from 'react';
// props
class MainViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false,
    };
  }

  save() {
    this.setState((prevState) => ({ saved: !prevState.saved }));
  }

  render() {
    const heart = this.state;
    let color;
    let fill;
    if (heart.saved) {
      color = 'heartOn';
      fill = 'M16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.912-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z';
    } else {
      color = 'heartOff';
      fill = 'M26.95 11.863a5.214 5.214 0 0 0-8.908-3.677l-1.908 1.908-1.906-1.908a5.214 5.214 0 1 0-7.377 7.366l1.912 1.913 7.371 7.373 7.373-7.373 1.912-1.912a5.193 5.193 0 0 0 1.53-3.69zM16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.913-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z';
    }
    return (
      <div id="MainViewer" onClick={this.props.toggleModal}>
        <div id="btnDiv">
          <button type="button" className="headerbtn" onClick={this.save.bind(this)}>
            <svg viewBox=" 0 0 32 32" className="headerSvg" id={color}>
              <path d={fill} />
            </svg>
            <div className="btnText">Save</div>
          </button>
          <button type="button" id="shareBtn" className="headerbtn">
            <svg viewBox="0 0 32 32" className="headerSvg">
              <path d="M17.29 7.2v14.285h-2.66V7.201l-3.99 3.99L8.76 9.31l7.2-7.2 7.2 7.2-1.88 1.88-3.99-3.99zm5.32 9.298h-2.66v-2.66h5.32v15.295H6.65V13.838h5.32v2.66H9.31v9.975h13.3v-9.975z" />
            </svg>
            <div className="btnText">Share</div>
          </button>
        </div>
        <div id="gradient" />
        <img id="main-img" src="./images/main.jpg" alt="" />
        <div>
          <button type="button" id="galleryBtn">
            <svg viewBox="0 0 32 32" id="gallerySvg">
              <path d="M6.65 20.335l4.305-4.784 3.519 3.22 5.949-7.848 4.847 8.143V6.65H6.65v13.685zm0 3.976v.959h18.62v-1.003l-5.113-8.59-5.326 7.027-3.693-3.38-4.488 4.987zM27.93 3.99v23.94H3.99V3.99h23.94zM13.965 13.3a1.995 1.995 0 1 1 0-3.99 1.995 1.995 0 0 1 0 3.99z" />
            </svg>
            <div id="imgCount">57</div>
          </button>
        </div>
      </div>
    );
  }
}

export default MainViewer;
