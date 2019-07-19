import React, { Component } from 'react'

class Notification extends Component {
  render() {
    return (
      <div>
        <div className="notification">
          <div className="progress-bar">
            <div id="progress-fill"></div>
          </div>
          <span className="float-right mr-2">
            <i className="mdi mdi-close"></i>
          </span>
          <div className="notification-message"></div>
        </div>      
      </div>
    )
  }
}

export default Notification