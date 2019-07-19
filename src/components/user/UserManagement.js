import React from 'react'
import Sidebar from '../Sidebar'
import AddUser from './AddUser'
import EditUser from './EditUser'
import DeleteUser from './DeleteUser'
import Notification from '../Notification'

function UserManagement() {
  return (
    <div className="container-fluid d-flex p-0">
      <Sidebar />
      <div className="main-panel p-5">
        <AddUser />
        <EditUser />
        <DeleteUser />
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
    </div>
  )
}

export default UserManagement