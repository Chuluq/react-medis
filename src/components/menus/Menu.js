import React, {Component} from 'react'
import Sidebar from '../Sidebar';
import Notification from '../Notification'
import AddMenu from './AddMenu'
import EditMenu from './EditMenu'
import DeleteMenu from './DeleteMenu'

class Menu extends Component {
  render() {
    return(
      <div className="container-fluid d-flex p-0">
        <Sidebar />
        <div className="main-panel p-5">
          <AddMenu />
          <EditMenu />
          <DeleteMenu />
          <Notification />
            
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
      </div>
    )
  }
}

export default Menu