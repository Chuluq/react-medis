import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar'
import ModalDeleteOpex from './ModalDeleteOpex'
import Notification from '../Notification'

function Practitioner() {
  return (
    <div className="container-fluid d-flex p-0">
      <Sidebar />
      <div className="main-panel p-5">
        <ModalDeleteOpex />
        <Notification />
        <div className="row">
          <div className="col-md-12">
            <div className="card" style={{minHeight: `calc('100vh' - '110px')`}}>
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-md-12 px-4">
                    <h2 className="card-title mb-4">Practitioner List
                      <span className="float-right">
                        <Link className="btn btn-sm btn-success" to="/AddPractitioner">Add New Practitioner</Link>
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 px-4"> 
                    <table id="example" className="table table-hover dt-responsive nowrap" style={{width:'100%'}}>
                      <thead>
                        <tr>
                          <th className="name-width">Name</th>
                          <th>Gender</th>
                          <th>Bith Date</th>
                          <th className="address-width">Address</th>
                          <th>Phone</th>
                          <th>Options</th>  
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="name-width">Ir. Roberto Firminho Sujadi</td>
                          <td>Male</td>
                          <td>1990-03-03</td>
                          <td className="address-width">Jl. Kusumanegara No.91, Umbulharjo, Kota Yogyakarta</td>
                          <td>087741434432</td>
                          <td className="text-center">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="mdi mdi-dots-horizontal"></i>
                              </a>
                              <div className=" dropright dropdown-menu">
                              <a className="dropdown-item"  href="practitioner-view.html">
                                  <i className="mdi mdi-eye mr-2"></i>Views</a>
                              <div className="dropdown-divider"></div><a className="dropdown-item" href="add-practitioner.html">
                                  <i className="mdi mdi-pencil mr-2"></i>Edit</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" data-toggle="modal" data-target="#delete-patient" href="#">
                                  <i className="mdi mdi-delete mr-2"></i>Delete</a>
                              </div>
                          </td>
                          </tr>
                          <tr>
                          <td className="name-width">Damian Lilliard</td>
                          <td>Male</td>
                          <td>1990-03-03</td>
                          <td className="address-width">Jl. Cantel 352 Baciro Gondokusuman Yogddyakarta</td>
                          <td>087741434432</td>
                          <td className="text-center">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="mdi mdi-dots-horizontal"></i>
                              </a>
                              <div className=" dropright dropdown-menu">
                              <a className="dropdown-item"  href="practitioner-view.html">
                                  <i className="mdi mdi-eye mr-2"></i>Views</a>
                              <div className="dropdown-divider"></div><a className="dropdown-item" href="add-practitioner.html">
                                  <i className="mdi mdi-pencil mr-2"></i>Edit</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" data-toggle="modal" data-target="#delete-patient" href="#">
                                  <i className="mdi mdi-delete mr-2"></i>Delete</a>
                              </div>
                          </td>
                          </tr>
                          <tr>
                          <td className="name-width">Damian Lilliard</td>
                          <td>Male</td>
                          <td>1990-03-03</td>
                          <td className="address-width">Yogyakarta</td>
                          <td>087741434432</td>
                          <td className="text-center">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="mdi mdi-dots-horizontal"></i>
                              </a>
                              <div className=" dropright dropdown-menu">
                              <a className="dropdown-item"  href="practitioner-view.html">
                                  <i className="mdi mdi-eye mr-2"></i>Views</a>
                              <div className="dropdown-divider"></div><a className="dropdown-item" href="add-practitioner.html">
                                  <i className="mdi mdi-pencil mr-2"></i>Edit</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" data-toggle="modal" data-target="#delete-patient" href="#">
                                  <i className="mdi mdi-delete mr-2"></i>Delete</a>
                              </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name-width">Damian Lilliard</td>
                          <td>Male</td>
                          <td>1990-03-03</td>
                          <td className="address-width">Yogyakarta</td>
                          <td>087741434432</td>
                          <td className="text-center">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="mdi mdi-dots-horizontal"></i>
                          </a>
                          <div className=" dropright dropdown-menu">
                              <a className="dropdown-item"  href="practitioner-view.html">
                              <i className="mdi mdi-eye mr-2"></i>Views</a>
                              <div className="dropdown-divider"></div><a className="dropdown-item" href="add-practitioner.html">
                              <i className="mdi mdi-pencil mr-2"></i>Edit</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" data-toggle="modal" data-target="#delete-patient" href="#">
                              <i className="mdi mdi-delete mr-2"></i>Delete</a>
                          </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name-width">Damian Lilliard Leonard</td>
                          <td>Male</td>
                          <td>1990-03-03</td>
                          <td className="address-width">Jl. Cantel 352 Baciro Gondokusuman Yogddyakarta</td>
                          <td>087741434432</td>
                          <td className="text-center">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="mdi mdi-dots-horizontal"></i>
                          </a>
                          <div className=" dropright dropdown-menu">
                          <a className="dropdown-item"  href="practitioner-view.html">
                              <i className="mdi mdi-eye mr-2"></i>Views</a>
                          <div className="dropdown-divider"></div><a className="dropdown-item" href="add-practitioner.html">
                              <i className="mdi mdi-pencil mr-2"></i>Edit</a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" data-toggle="modal" data-target="#delete-patient" href="#">
                              <i className="mdi mdi-delete mr-2"></i>Delete</a>
                          </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name-width">Damian Lilliard</td>
                          <td>Male</td>
                          <td>1990-03-03</td>
                          <td className="address-width">Yogyakarta</td>
                          <td>087741434432</td>
                          <td className="text-center">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="mdi mdi-dots-horizontal"></i>
                          </a>
                          <div className=" dropright dropdown-menu">
                              <a className="dropdown-item"  href="practitioner-view.html">
                              <i className="mdi mdi-eye mr-2"></i>Views</a>
                              <div className="dropdown-divider"></div><a className="dropdown-item" href="add-practitioner.html">
                              <i className="mdi mdi-pencil mr-2"></i>Edit</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" data-toggle="modal" data-target="#delete-patient" href="#">
                              <i className="mdi mdi-delete mr-2"></i>Delete</a>
                          </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="name-width">Damian Lilliard</td>
                          <td>Male</td>
                          <td>1990-03-03</td>
                          <td className="address-width">Yogyakarta</td>
                          <td>087741434432</td>
                          <td className="text-center">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="mdi mdi-dots-horizontal"></i>
                          </a>
                          <div className=" dropright dropdown-menu">
                              <a className="dropdown-item"  href="practitioner-view.html">
                              <i className="mdi mdi-eye mr-2"></i>Views</a>
                              <div className="dropdown-divider"></div><a className="dropdown-item" href="add-practitioner.html">
                              <i className="mdi mdi-pencil mr-2"></i>Edit</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" data-toggle="modal" data-target="#delete-patient" href="#">
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

export default Practitioner