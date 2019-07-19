import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Notification from './Notification'

class UserManagement extends Component {
  render() {
    return (
      <div className="container-fluid d-flex p-0">
        <Sidebar />
        <div className="main-panel p-5">
          {/* Modal for add user */}
          <div className="modal fade" id="add-user" tabIndex="-1" role="dialog" aria-labelledby="add-user" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="create-group-title">Add New User</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                  <form className="px-4 py-2" id="userName" name="userName" method="post" action="">
                    <div className="form-group p-0">
                      <label>User Name</label>
                      <input type="text" className="form-control form-control-md" required="" />
                    </div>
                    <div className="form-group p-0">
                      <label>Fullname</label>
                      <input type="text" className="form-control form-control-md" required="" />
                    </div>
                    <div className="form-group p-0">
                      <label>Email</label>
                      <input type="text" className="form-control form-control-md" required="" />
                    </div>
                    <div className="form-group p-0">
                      <label>Phone</label>
                      <input type="text" className="form-control form-control-md" required="" />
                    </div>
                    <div className="form-group p-0">
                      <label>Password</label>
                      <input type="Password" className="form-control form-control-md" required="" />
                    </div>
                    <div className="form-group p-0">
                      <label>Group</label>
                      <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                        <option></option>
                        <option>User</option>
                        <option>Operator</option>
                        <option>Admin</option>
                      </select>
                    </div>
                 </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary btn-sm mr-3" data-dismiss="modal">Cancel</button>
                  <a href="#" className="btn btn-primary d-xl-inline-block btn-sm" id="save-user">Save</a>
                </div>
              </div>
            </div>
          </div>

          {/* Modal for edit user */}
          <div className="modal fade" id="edit-user" tabIndex="-1" role="dialog" aria-labelledby="edit-user" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="create-group-title">Edit User</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                  <form className="px-4 py-2" id="userName" name="userName" method="post" action="">
                    <div className="form-group p-0">
                      <label>User Name</label>
                      <input type="text" className="form-control form-control-md" required="" />
                    </div>
                    <div className="form-group p-0">
                      <label>Fullname</label>
                      <input type="text" className="form-control form-control-md" required="" />
                    </div>
                    <div className="form-group p-0">
                      <label>Email</label>
                      <input type="text" className="form-control form-control-md" required="" />
                    </div>
                    <div className="form-group p-0">
                      <label>Phone</label>
                      <input type="text" className="form-control form-control-md" required="" />
                    </div>
                    <div className="form-group p-0">
                      <label>Password</label>
                      <input type="Password" className="form-control form-control-md" required="" />
                    </div>
                    <div className="form-group p-0">
                      <label>Group</label>
                      <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                        <option></option>
                        <option>User</option>
                        <option>Operator</option>
                        <option>Admin</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary btn-sm mr-3" data-dismiss="modal">Cancel</button>
                  <a href="#" className="btn btn-primary d-xl-inline-block btn-sm" id="save-edit">Save</a>
                </div>
              </div>
            </div>
          </div>

          {/* Modal for delete user */}
          <div className="modal fade" id="delete-user" tabIndex="-1" role="dialog" aria-labelledby="delete-user" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="create-group-title">Delete User</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p style={{fontSize: '14px'}}>Are you sure want to delete this user?</p>
                </div>
                <div className="modal-footer">
                  <a href="#" className="btn btn-danger d-xl-inline-block btn-sm mr-3" id="delete">Delete</a>
                  <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Cancel</button>
                </div>
              </div>
            </div>
          </div>

          <Notification />

          <div className="row">
            <div className="col-md-12">
              <div className="card" style={{minHeight: `calc('100vh' - '110px')`}}>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-md-12 px-4">
                      <h2 className="card-title mb-4">User List
                        <span className="float-right">
                          <a className="btn btn-sm btn-success" data-toggle="modal" data-target="#add-user" href="#">Add New User</a>
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 px-4"> 
                      <table id="example" className="table table-hover dt-responsive nowrap" style={{width:'100%'}}>
                        <thead>
                          <tr>
                            <th>Full Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Options</th>  
                          </tr>                                
                        </thead>
                        <tbody>
                          <tr>
                            <td>Fatkhul karim</td>
                            <td>fatkhulkarim</td>
                            <td>fatkhul.karim@solusi247.com</td>
                            <td>087741434432</td>
                            <td className="text-center">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="mdi mdi-dots-horizontal"></i>
                              </a>
                              <div className=" dropright dropdown-menu">
                                <a className="dropdown-item" data-toggle="modal" data-target="#edit-user" href="#">
                                  <i className="mdi mdi-pencil mr-2"></i>Edit</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" data-toggle="modal" data-target="#delete-user" href="#">
                                  <i className="mdi mdi-delete mr-2"></i>Delete</a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Fatkhul karim</td>
                            <td>fatkhulkarim</td>
                            <td>fatkhul.karim@solusi247.com</td>
                            <td>087741434432</td>
                            <td className="text-center">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="mdi mdi-dots-horizontal"></i>
                              </a>
                              <div className=" dropright dropdown-menu">
                                <a className="dropdown-item" data-toggle="modal" data-target="#edit-user" href="#">
                                  <i className="mdi mdi-pencil mr-2"></i>Edit</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" data-toggle="modal" data-target="#delete-user" href="#">
                                  <i className="mdi mdi-delete mr-2"></i>Delete</a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Fatkhul karim</td>
                            <td>fatkhulkarim</td>
                            <td>fatkhul.karim@solusi247.com</td>
                            <td>087741434432</td>
                            <td className="text-center">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="mdi mdi-dots-horizontal"></i>
                              </a>
                              <div className=" dropright dropdown-menu">
                                <a className="dropdown-item" data-toggle="modal" data-target="#edit-user" href="#">
                                  <i className="mdi mdi-pencil mr-2"></i>Edit</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" data-toggle="modal" data-target="#delete-user" href="#">
                                  <i className="mdi mdi-delete mr-2"></i>Delete</a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Fatkhul karim</td>
                            <td>fatkhulkarim</td>
                            <td>fatkhul.karim@solusi247.com</td>
                            <td>087741434432</td>
                            <td className="text-center">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="mdi mdi-dots-horizontal"></i>
                              </a>
                              <div className=" dropright dropdown-menu">
                                <a className="dropdown-item" data-toggle="modal" data-target="#edit-user" href="#">
                                    <i className="mdi mdi-pencil mr-2"></i>Edit</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" data-toggle="modal" data-target="#delete-user" href="#">
                                    <i className="mdi mdi-delete mr-2"></i>Delete</a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Fatkhul karim</td>
                            <td>fatkhulkarim</td>
                            <td>fatkhul.karim@solusi247.com</td>
                            <td>087741434432</td>
                            <td className="text-center">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="mdi mdi-dots-horizontal"></i>
                              </a>
                              <div className=" dropright dropdown-menu">
                                <a className="dropdown-item" data-toggle="modal" data-target="#edit-user" href="#">
                                  <i className="mdi mdi-pencil mr-2"></i>Edit</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" data-toggle="modal" data-target="#delete-user" href="#">
                                  <i className="mdi mdi-delete mr-2"></i>Delete</a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main panel end */}
      </div>
    )
  }
}

export default UserManagement