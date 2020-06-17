import React from 'react'
import ReactDOM from 'react-dom'

import MainViewer from './components/MainViewer.jsx'
import PopUp from './components/PopUp.jsx'
import TourSchedule from './components/TourSchedule.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      popup: false,

    }
  }

  render() {
    return (
      <div>
        <MainViewer />
        <TourSchedule />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));