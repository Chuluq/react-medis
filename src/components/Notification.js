import React from 'react'

function Notification() {
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

export default Notification