import React, { Component } from 'react'

class Notification extends Component {
  render() {
    return (
      <div>
        <div class="notification">
          <div class="progress-bar">
            <div id="progress-fill"></div>
          </div>
          <span class="float-right mr-2">
            <i class="mdi mdi-close"></i>
          </span>
          <div class="notification-message"></div>
        </div>      
      </div>
    )
  }
}

export default Notification