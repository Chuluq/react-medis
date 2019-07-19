import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return(
    <div>
      <nav className="sidebar">
        <ul className="nav">
          <li className="nav-item profile py-4 mb-1">
            <Link to="/" className="nav-link text-white">
              <div className="media">     
                <img src="dist/img/avatars/avatar-2.png" className="img-fluid rounded-circle align-self-center mr-3" alt="..." style={{width:45, height: 'auto'}} id="photo-profile" />
                <div className="media-body" style={{maxWidth: '130px'}}>
                  <p className="mb-1 font-weight-medium">Fatkhul Karim</p>
                  <p className="mb-0" style={{fontSize: '12px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>karim.fatkhul@gmail.com</p>
                </div>
              </div>
            </Link>
          </li>
          <li className="nav-item nav-title">
            Account
          </li>
          <li className="nav-item" id="settings">
            <Link to="/" className="nav-link ">
              <i className="menu-icon mdi loading"></i>
              <span className="loading"></span>
            </Link>
          </li>
          <li className="nav-item" id="administartion">
            <a className="nav-link" data-toggle="collapse" href="#admin-menu" aria-expanded="false" aria-controls="admin-menu">
              <i className="menu-icon mdi loading"></i>
                <span className="loading"></span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="admin-menu">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link className="nav-link" to="/menu">Menu Management</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/user">User Management</Link>
                </li>
              </ul>
            </div>
          </li>
          <hr style={{width:'85%'}} />
          <li className="nav-item nav-title">
            Navigation
          </li>
          <li className="nav-item" id="dashboard">
            <a className="nav-link" href="#">
              <i className="menu-icon mdi loading"></i>
              <span className="loading"></span>
            </a>
          </li>
          <li className="nav-item" id="patient">
            <a className="nav-link" href="patient.html">
              <i className="menu-icon mdi loading"></i>
              <span className="loading"></span>
            </a>
          </li>
          <li className="nav-item" id="practitioner">
            <Link className="nav-link" to="/practitioner">
              <i className="menu-icon mdi loading"></i>
              <span className="loading"></span>
            </Link>
          </li>
          <hr style={{width:'85%'}} />
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar