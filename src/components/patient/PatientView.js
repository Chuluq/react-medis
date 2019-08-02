import React from 'react'
import {Link} from 'react-router-dom'
import Sidebar from '../Sidebar'

const PatientView = (props) => {
  return(
    <div className="container-fluid d-flex p-0">
      <Sidebar />
      <div className="main-panel p-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card" style={{minHeight: `calc('100vh' - '110px')`}}>
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-md-12 px-4">
                    <h2 className="card-title mb-4">Patient Name Details
                      {/* <span className="float-right">
                        <Link className="btn btn-sm btn-warning" to={`/patient-edit/:${props.id}`}>Edit Patient</Link>
                      </span> */}
                    </h2>
                  </div>
                </div>
                {props.obj.map((patient, index) => {
                  return (
                  <div className="row" key={index}>
                    <div className="col-md-12 px-4"> 
                      <ul className="nav nav-tabs" id="patientTab" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" id="personal-info-tab" data-toggle="tab" href="#personal-info" role="tab" aria-controls="personal-info" aria-selected="true">Personal Info</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="address-tab" data-toggle="tab" href="#address" role="tab" aria-controls="address" aria-selected="false">Address</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                        </li>
                          <li className="nav-item">
                          <a className="nav-link" id="others-tab" data-toggle="tab" href="#others" role="tab" aria-controls="others" aria-selected="false">Contact</a>
                        </li>
                      </ul>
                      <div className="tab-content" id="patientTabContent">
                        <div className="tab-pane fade show active pt-4" id="personal-info" role="tabpanel" aria-labelledby="personal-info-tab">
                          <div className="row mb-3">
                            <div className="col-md-12 px-4">
                              <form className="px-4 py-2"  method="post" action="">
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="form-title">Identifier</div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group p-0">
                                      <label>Identifier Use</label>
                                      <p>{patient.idUse}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Identifier Number</label>
                                      <p>{patient.idNo}</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group p-0">
                                      <label>Identifier Type</label>
                                      <p>{patient.idType}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Identifier Periode</label>
                                      <p>{patient.idPeriode}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="form-title">Name configuration</div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group p-0">
                                      <label>Name Use</label>
                                      <p>{patient.nameUse}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Full Name</label>
                                      <p>{patient.fullName}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Sufix</label>
                                      <p>{patient.suffix}</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group p-0">
                                      <label>Prefix</label>
                                      <p>{patient.prefix}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Family Name</label>
                                      <p>{patient.familyName}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Given Name</label>
                                      <p>{patient.givenName}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="form-title">Gender and BOD</div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group p-0">
                                      <label>Marital Status</label>
                                      <p>{patient.maritalStatus}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Birth Date</label>
                                      <p>{patient.bod}</p>
                                    </div>       
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group p-0">
                                      <label>Gender</label>
                                      <p>{patient.gender}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label className="d-block" style={{marginTop: '20px !important'}}>Multiple Birth Status</label>
                                      <label className="container-radio d-inline">{patient.multipleBirth}
                                        <input type="radio" defaultChecked />
                                        <span className="checkmark-radio"></span>
                                      </label>
                                    </div>
                                    <div className="form-group p-0">
                                      <label className="d-block" style={{marginTop: '20px !important'}}>Deceased Status</label>
                                      <label className="container-radio d-inline">{patient.deceasedStatus}
                                        <input type="radio" defaultChecked />
                                        <span className="checkmark-radio"></span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="form-title">Contact info</div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group p-0">
                                      <label>Contact Point System</label>
                                      <p>{patient.contactPoint}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Rank Use</label>
                                      <p>{patient.rankUse}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Phone Periode</label>
                                      <p>{patient.phonePeriode}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Photo</label>
                                      <p>{patient.photo}</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group p-0">
                                      <label>Contact Point Use</label>
                                      <p>{patient.contactPointUse}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Phone Number</label>
                                      <p>{patient.phoneNo}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Photo language</label>
                                      <p>{patient.photoLanguage}</p>
                                    </div>
                                  </div>
                                </div>
                                <a className="btn btn-success btn-sm float-right" style={{color: '#fff !important'}} id="next">Next
                                  <i className="mdi mdi-chevron-right"></i>
                                </a>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade show pt-4" id="address" role="tabpanel" aria-labelledby="address-tab">
                          <div className="row mb-3">
                            <div className="col-md-12 px-4">
                              <form className="px-4 py-2"  method="post" action="">
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="form-title">Address</div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group p-0">
                                      <label>Address Use</label>
                                      <p>{patient.addressUse}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Country</label>
                                      <p>{patient.country}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>City</label>
                                      <p>{patient.city}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Line</label>
                                      <p>{patient.line}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Full Address</label>
                                      <p>{patient.fullAddress}</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group p-0">
                                      <label>Address Type</label>
                                      <p>{patient.addressType}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>State</label>
                                      <p>{patient.state}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>District</label>
                                      <p>{patient.district}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Postal Code</label>
                                      <p>{patient.postalCode}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Address Periode</label>
                                      <p>{patient.addressPeriode}</p>
                                    </div>
                                  </div>
                                  <div className="mt-3" style={{width: '100%', textAlign: 'right'}}>
                                    <a className="btn btn-success btn-sm mr-3" style={{color: '#fff !important'}} id="prev"><i className="mdi mdi-chevron-left"></i>Previous
                                    </a>
                                    <a className="btn btn-success btn-sm " style={{color: '#fff !important'}}id="next2">Next
                                      <i className="mdi mdi-chevron-right"></i>
                                    </a>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade show  pt-4" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                          <div className="row mb-3">
                            <div className="col-md-12 px-4">
                              <form className="px-4 py-2"  method="post" action="">
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="form-title">Name Configuration</div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group p-0">
                                      <label>Name Use</label>
                                      <p>{patient.nameUseR}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Prefix</label>
                                      <p>{patient.prefixR}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Sufix</label>
                                      <p>{patient.suffixR}</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group p-0">
                                      <label>Related Person Name</label>
                                      <p>{patient.relatedPersonName}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Family Name</label>
                                      <p>{patient.familyNameR}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Given Name</label>
                                      <p>{patient.givenNameR}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="form-title">Gender</div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group p-0">
                                      <label>Gender</label>
                                      <p>{patient.genderR}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Contact Relation Periode</label>
                                      <p>{patient.contactPeriodeR}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Contact Telecom System</label>
                                      <p>{patient.contactSystemR}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Telecom Rank Use</label>
                                      <p>{patient.rankUseR}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Address Use</label>
                                      <p>{patient.addressUseR}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Country</label>
                                      <p>{patient.countryR}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>City</label>
                                      <p>{patient.cityR}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Line</label>
                                      <p>{patient.lineR}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Address</label>
                                      <p>{patient.fullAddressR}</p>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group p-0">
                                      <label>Contact Role</label>
                                      <p>{patient.contactRoleR}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Contact Relation Organization</label>
                                      <p>{patient.contactROrg}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Contact Telecom Use</label>
                                      <p>{patient.contactUseR}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Contact Telecom Number</label>
                                      <p>{patient.contactNoR}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Address Type</label>
                                      <p>{patient.addressTypeR}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>State</label>
                                      <p>{patient.stateR}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>District</label>
                                      <p>{patient.districtR}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Postal Code</label>
                                      <p>{patient.postalCodeR}</p>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Periode</label>
                                      <p>{patient.addressPeriodeR}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-3" style={{width: '100%', textAlign: 'right'}}>
                                  <a className="btn btn-success btn-sm mr-3" style={{color: '#fff !important'}} id="prev2"><i className="mdi mdi-chevron-left"></i>
                                    Previous
                                  </a>
                                  <a className="btn btn-success btn-sm " style={{color: '#fff !important'}} id="next3">Next
                                    <i className="mdi mdi-chevron-right"></i>
                                  </a>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade show  pt-4" id="others" role="tabpanel" aria-labelledby="others-tab">
                          <div className="row mb-3">
                            <div className="col-md-12 px-4">
                              <form className="px-4 py-2"  method="post" action="">
                                <div className="form-group p-0">
                                  <label>Language</label>
                                  <p>{patient.languageR}</p>
                                </div>
                                <div className="form-group p-0">
                                  <label className="d-block" style={{marginTop: '20px !important'}}>Prefered</label>
                                  <label className="container-radio d-inline">{patient.prefered}
                                    <input type="radio" defaultChecked />
                                    <span className="checkmark-radio"></span>
                                  </label>
                                </div>
                                <div className="row mt-5">
                                  <div className="col-md-6">
                                    <a className="btn btn-success btn-sm mr-3" style={{color: '#fff !important'}} id="prev3"><i className="mdi mdi-chevron-left"></i>Previous
                                    </a>
                                  </div>
                                  <div className="col-md-6" style={{textAlign: 'right'}}>
                                    <a className="btn btn-secondary btn-sm mr-2 " style={{color: '#fff !important'}} href="patient.html">Cancel
                                    </a>
                                    <a className="btn btn-primary btn-sm " href="patient.html" style={{color: '#fff !important'}}>Save
                                    </a>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientView