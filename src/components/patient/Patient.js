import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar'
import ModalDeleteOpex from '../ModalDeleteOpex'
import Notification from '../Notification'

const Patient = (props) => {
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
                    <h2 className="card-title mb-4">Patient List
                      <span className="float-right">
                        <Link className="btn btn-sm btn-success" to="/patient-add">Add New Patient</Link>
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 px-4">
                    <React.Fragment>
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
                          { (props.patients.length > 0) ? props.patients.map( (patient, index) => {
                            return (
                              <tr key={ index }>
                                <td className="name-width">{patient.fullName}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.bod}</td>
                                <td className="address-width">{patient.fullAddress}</td>
                                <td>{patient.phoneNo}</td>
                                <td className="text-center">
                                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="mdi mdi-dots-horizontal"></i>
                                  </a>
                                  <div className=" dropright dropdown-menu">
                                    <Link className="dropdown-item" to={`/patient-view/:${patient.id}`}>
                                      <i className="mdi mdi-eye mr-2"></i>Views
                                    </Link>
                                  <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to={`/patient-edit/:${patient.id}`} onClick={() => props.handleClick(index)}>
                                      <i className="mdi mdi-pencil mr-2"></i>Edit
                                    </Link>
                                  <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to={`/patient-delete/:${patient.id}`}>
                                      <i className="mdi mdi-delete mr-2"></i>Delete
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                            )
                          }) : <tr><td colSpan="5">Loading...</td></tr> }
                        </tbody>
                      </table>
                    </React.Fragment>
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

export default Patient