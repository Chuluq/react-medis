import React, {Component} from 'react'
import Sidebar from './Sidebar';
import Notification from './Notification'

class Menu extends Component {
  render() {
    return(
      /* <!--Container--> */
      <div className="container-fluid d-flex p-0">
        {/* <!--Sidebar--> */}
          <Sidebar />
        {/* <!--Sidebar-end--> */}

        {/* <!--Main-panel--> */}
        <div className="main-panel p-5">

            {/* <!--Modal for add menu--> */}
            <div className="modal fade" id="add-menu" tabIndex="-1" role="dialog" aria-labelledby="add-menu" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="create-group-title">Add New Menu</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="px-4 py-2" id="userName" name="userName" method="post" action="">
                                <div className="form-group p-0">
                                    <label>Menu Name</label>
                                    <input type="text" className="form-control form-control-md" required="" />
                                </div>
                                <div className="form-group p-0">
                                    <label>Modul Name</label>
                                    <input type="text" className="form-control form-control-md" required="" />
                                </div>
                                <div className="form-group p-0">
                                    <label>Menu Icon</label>
                                    <input type="text" className="form-control form-control-md" required="" />
                                </div>
                                <div className="form-group p-0">
                                    <label>Menu Level</label>
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                                        <option></option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                                <div className="form-group p-0">
                                    <label>Select Sort Index</label>
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                                        <option></option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                                <div className="form-group p-0">
                                    <label style={{display: 'block'}}>Config</label>
                                    <label className="container-checkbox d-inline mr-3">View
                                        <input type="checkbox" checked="checked" name="check" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container-checkbox d-inline mr-3">Insert
                                        <input type="checkbox" name="check" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container-checkbox d-inline mr-3">Update
                                        <input type="checkbox" checked="checked" name="check" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container-checkbox d-inline mr-3">Delete
                                        <input type="checkbox" name="check" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary btn-sm mr-3" data-dismiss="modal">Cancel</button>
                            <a href="#" className="btn btn-primary d-xl-inline-block btn-sm" id="save-menu">Save</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Modal for add menu end--> */}

            {/* <!--Modal for edit menu--> */}
            <div className="modal fade" id="edit-menu" tabIndex="-1" role="dialog" aria-labelledby="edit-menu" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="create-group-title">Edit Menu</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="px-4 py-2" id="userName" name="userName" method="post" action="">
                                <div className="form-group p-0">
                                    <label>Menu Name</label>
                                    <input type="text" className="form-control form-control-md" required="" />
                                </div>
                                <div className="form-group p-0">
                                    <label>Modul Name</label>
                                    <input type="text" className="form-control form-control-md" required="" />
                                </div>
                                <div className="form-group p-0">
                                    <label>Menu Icon</label>
                                    <input type="text" className="form-control form-control-md" required="" />
                                </div>
                                <div className="form-group p-0">
                                    <label>Menu Level</label>
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                                        <option></option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                                <div className="form-group p-0">
                                    <label>Select Sort Index</label>
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                                        <option></option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                                <div className="form-group p-0">
                                    <label style={{display: 'block'}}>Config</label>
                                    <label className="container-checkbox d-inline mr-3">View
                                        <input type="checkbox" checked="checked" name="check" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container-checkbox d-inline mr-3">Insert
                                        <input type="checkbox" name="check" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container-checkbox d-inline mr-3">Update
                                        <input type="checkbox" checked="checked" name="check" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container-checkbox d-inline mr-3">Delete
                                        <input type="checkbox" name="check" />
                                        <span className="checkmark"></span>
                                    </label>
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
            {/* <!--Modal for add menu end--> */}

            {/* <!--Modal for delete menu--> */}
            <div className="modal fade" id="delete-menu" tabIndex="-1" role="dialog" aria-labelledby="delete-menu" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="create-group-title">Delete Menu</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p style={{fontSize: '14px'}}>Are you sure want to delete this Menu?</p>
                        </div>
                        <div className="modal-footer">
                            <a href="#" className="btn btn-danger d-xl-inline-block btn-sm mr-3" id="delete">Delete</a>
                            <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Modal for delete end--> */}

            {/* <!--Notification Message--> */}
              <Notification />
            {/* <!--Notification Message end--> */}
            
            <div className="row">
                <div className="col-md-12">
                    <div className="card" style={{minHeight: `calc('100vh' - '110px')`}}>
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col-md-12 px-4">
                                    <h2 className="card-title mb-4">Menu List
                                        <span className="float-right">
                                            <a className="btn btn-sm btn-success" data-toggle="modal" data-target="#add-menu" href="#">Add New Menu</a>
                                        </span>
                                    </h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 px-4"> 
                                    <table id="example" className="table table-hover dt-responsive nowrap" style={{width:'100%'}}>
                                        <thead>
                                            <tr>
                                                <th>Menu Name</th>
                                                <th>Modul Name</th>
                                                <th>Status</th>
                                                <th>Options</th>  
                                            </tr>
                                            
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Dashboard</td>
                                                <td>Dashboard menu for monitoring data</td>
                                                <td><span className="badge badge-success">Enable</span></td>
                                                <td className="text-center">
                                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="mdi mdi-dots-horizontal"></i>
                                                    </a>
                                                    <div className=" dropright dropdown-menu">
                                                        <a className="dropdown-item" data-toggle="modal" data-target="#edit-menu" href="#">
                                                            <i className="mdi mdi-pencil mr-2"></i>Edit</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item" data-toggle="modal" data-target="#delete-menu" href="#">
                                                            <i className="mdi mdi-delete mr-2"></i>Delete</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Patient</td>
                                                <td>Patient menus for patient monitoring</td>
                                                <td><span className="badge badge-secondary">Disable</span></td>
                                                <td className="text-center">
                                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="mdi mdi-dots-horizontal"></i>
                                                    </a>
                                                    <div className=" dropright dropdown-menu">
                                                        <a className="dropdown-item" data-toggle="modal" data-target="#edit-menu" href="#">
                                                            <i className="mdi mdi-pencil mr-2"></i>Edit</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item" data-toggle="modal" data-target="#delete-menu" href="#">
                                                            <i className="mdi mdi-delete mr-2"></i>Delete</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Practitioner</td>
                                                <td>Practitioner menus for patient monitoring</td>
                                                <td><span className="badge badge-success">Enable</span></td>
                                                <td className="text-center">
                                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="mdi mdi-dots-horizontal"></i>
                                                    </a>
                                                    <div className=" dropright dropdown-menu">
                                                        <a className="dropdown-item" data-toggle="modal" data-target="#edit-menu" href="#">
                                                            <i className="mdi mdi-pencil mr-2"></i>Edit</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item" data-toggle="modal" data-target="#delete-menu" href="#">
                                                            <i className="mdi mdi-delete mr-2"></i>Delete</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Administration</td>
                                                <td>Configuration segement</td>
                                                <td><span className="badge badge-success">Enable</span></td>
                                                <td className="text-center">
                                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="mdi mdi-dots-horizontal"></i>
                                                    </a>
                                                    <div className=" dropright dropdown-menu">
                                                        <a className="dropdown-item" data-toggle="modal" data-target="#edit-menu" href="#">
                                                            <i className="mdi mdi-pencil mr-2"></i>Edit</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item" data-toggle="modal" data-target="#delete-menu" href="#">
                                                            <i className="mdi mdi-delete mr-2"></i>Delete</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Profile Setting</td>
                                                <td></td>
                                                <td><span className="badge badge-secondary">Disable</span></td>
                                                <td className="text-center">
                                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="mdi mdi-dots-horizontal"></i>
                                                    </a>
                                                    <div className=" dropright dropdown-menu">
                                                        <a className="dropdown-item" data-toggle="modal" data-target="#edit-menu" href="#">
                                                            <i className="mdi mdi-pencil mr-2"></i>Edit</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item" data-toggle="modal" data-target="#delete-menu" href="#">
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
        {/* Main-panel-end */}
    </div>
    )
  }
}

export default Menu