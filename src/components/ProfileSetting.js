import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Notification from './Notification'

class ProfileSetting extends Component {
  render() {
    return (
      <div className="container-fluid d-flex p-0">
        <Sidebar />
        <div className="main-panel p-5">
          <Notification />
          <div className="row">
            <div className="col-md-12">
              <div className="card" style={{minHeight: `calc('100vh' - '110px')`}}>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-md-12 px-4">
                      <h2 className="card-title mb-4">Profile Setting</h2>
                    </div>
                  </div>
                  <div className="row px-5">
                    <div className="col-md-6 px-4"> 
                      <div className="media">
                        <img src="dist/img/avatars/avatar-2.png" className="img-fluid rounded-circle align-self-center mr-3" alt="..." style={{width:130, height:'auto'}} />
                        <div className="media-body">
                          <h5 className="mt-0">Fatkhul Karim</h5>
                          <p className="text-muted mb-2" style={{fontSize: '13px', color: '#a0a0a0 !important'}}>
                            fatkhul.solusi247.com
                          </p>
                          <p className="text-muted" style={{fontSize: '13px', color: '#a0a0a0 !important'}}>
                            Group: User
                          </p>
                          <button className="btn btn-success btn-sm" id="editProfile"><i className="mdi mdi-account-edit"></i>Edit My Profile</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8 px-4 mt-4" id="information">
                      <div className="col-md-12 px-0">
                        <div className="form-title">Personal Information</div>
                      </div>
                      <div className="form-group p-0">
                        <label>User Name</label>
                        <input type="text" name="" className="form-control form-control-sm" value="fatkhulkarim" readOnly={true} />
                      </div>
                      <div className="form-group p-0">
                        <label>Fullname</label>
                        <input type="text" name="" className="form-control form-control-sm" value="Fatkhul Karim" readOnly={true} />
                      </div>
                      <div className="form-group p-0">
                        <label>Email</label>
                        <input type="text" name="" className="form-control form-control-sm" value="fatkhul.solusi247.com" readOnly={true} />
                      </div>
                      <div className="form-group p-0">
                        <label>Phone</label>
                        <input type="text" name="" className="form-control form-control-sm" value="087741434432" readOnly={true} />
                      </div>
                      <div className="col-md-12 px-0">
                        <div className="form-title">Change Password</div>
                      </div>
                      <div className="form-group p-0">
                        <label>Current Password</label>
                        <input type="password" name="" className="form-control form-control-sm" readOnly={true} />
                      </div>
                      <div className="form-group p-0">
                        <label>New Password</label>
                        <input type="password" name="" className="form-control form-control-sm" readOnly={true} />
                      </div>
                      <div className="form-group p-0">
                        <label>Retype New Password</label>
                        <input type="password" name="" className="form-control form-control-sm" readOnly={true} />
                      </div>

                      <div className="form-group pt-2" id="button" style={{display: 'none'}}>
                        <button type="button" className="btn btn-secondary btn-sm mr-2">Cancel</button>
                        <a href="#" className="btn btn-primary btn-sm d-xl-inline-block" id="save">Save</a>
                      </div>   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileSetting