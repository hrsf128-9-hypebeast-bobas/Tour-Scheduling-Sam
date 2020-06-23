import React from 'react';
import svgPath from './svgPaths';

class SaveButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false,
    };

    this.save = this.save.bind(this);
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
      fill = svgPath.heartOn;
    } else {
      color = 'heartOff';
      fill = svgPath.heartOff;
    }
    return (
      <div id="btnDiv">
        <button type="button" className="headerbtn" onClick={this.save}>
          <svg viewBox=" 0 0 32 32" className={`headerSvg ${color}`}>
            <path d={fill} />
          </svg>
          <div className="btnText">Save</div>
        </button>
        <button type="button" id="shareBtn" className="headerbtn">
          <svg viewBox="0 0 32 32" className="headerSvg">
            <path d={svgPath.share} />
          </svg>
          <div className="btnText">Share</div>
        </button>
      </div>
    );
  }
}

export default SaveButton;
