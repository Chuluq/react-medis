import React from 'react'
import {Link} from 'react-router-dom'
import Sidebar from '../Sidebar'

function PatientView() {
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
                      <span className="float-right">
                        <Link className="btn btn-sm btn-warning" to="/patient-add">Edit Patient</Link>
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="row">
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
                                    <p>NIK</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Identifier Number</label>
                                    <p>3403031732121</p>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group p-0">
                                    <label>Identifier Type</label>
                                    <p>NIK</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Identifier Periode</label>
                                    <p>2019-02-03 to 2019-03-03</p>
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
                                    <p>Real Name</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Full Name</label>
                                    <p>Fatkhul Karim</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Sufix</label>
                                    <p>S.T.</p>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group p-0">
                                    <label>Prefix</label>
                                    <p>Mr</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Family Name</label>
                                    <p>Karim</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Given Name</label>
                                    <p>Karim</p>
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
                                    <p>Single</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Birth Date</label>
                                    <p>11-03-1993</p>
                                  </div>       
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group p-0">
                                    <label>Gender</label>
                                    <p>Male</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label className="d-block" style={{marginTop: '20px !important'}}>Multiple Birth Status</label>
                                    <label className="container-radio d-inline">False
                                      <input type="radio" defaultChecked />
                                      <span class="checkmark-radio"></span>
                                    </label>
                                  </div>
                                  <div className="form-group p-0">
                                    <label className="d-block" style={{marginTop: '20px !important'}}>Deceased Status</label>
                                    <label className="container-radio d-inline">True
                                      <input type="radio" defaultChecked />
                                      <span class="checkmark-radio"></span>
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
                                    <p>Contact point system content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Rank Use</label>
                                    <p>Rank use</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Phone Periode</label>
                                    <p>Phone periode content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Photo</label>
                                    <img src="dist/img/avatars/avatar-2.png" className="img-fluid rounded-circle align-self-center mx-5" alt="..." style={{width:100, height:"auto"}} />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group p-0">
                                    <label>Contact Point Use</label>
                                    <p>Contact point use content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Phone Number</label>
                                    <p>087741434432</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Photo language</label>
                                    <p>Photo language content</p>
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
                                    <p>Jl.Daendel No.8</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Country</label>
                                    <p>Indonesia</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>City</label>
                                    <p>Yogyakarta</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Line</label>
                                    <p>Line content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Full Address</label>
                                    <p>Jl. daendel No.8 GK, Yogyakarta</p>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group p-0">
                                    <label>Address Type</label>
                                    <p>Address type content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>State</label>
                                    <p>Yogyakarta</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>District</label>
                                    <p>Gondokusman</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Postal Code</label>
                                    <p>55020</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Address Periode</label>
                                    <p>Address Periode content</p>
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
                                    <p>Name use content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Prefix</label>
                                    <p>Mr.</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Sufix</label>
                                    <p>S.T.</p>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group p-0">
                                    <label>Related Person Name</label>
                                    <p>Related person name content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Family Name</label>
                                    <p>Karim</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Given Name</label>
                                    <p>Karim</p>
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
                                    <p>Male</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Contact Relation Periode</label>
                                    <input type="text" className="form-control form-control-sm" />
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Contact Telecom System</label>
                                    <p>089971717162</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Telecom Rank Use</label>
                                    <p>Tel rank use content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Address Use</label>
                                    <p>Address use content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Country</label>
                                    <p>Indonesia</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>City</label>
                                    <p>Yogyakarta</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Line</label>
                                    <p>Line content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Address</label>
                                    <p>Addresss content</p>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group p-0">
                                    <label>Contact Role</label>
                                    <p>Contact role content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Contact Relation Organization</label>
                                    <p>Contact relation content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Contact Telecom Use</label>
                                    <p>Contact telecom content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Contact Telecom Number</label>
                                    <p>12345678</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Address Type</label>
                                    <p>Addresss type content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>State</label>
                                    <p>Yogyakarta</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Distric</label>
                                    <p>Gondokusman</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Postal Code</label>
                                    <p>55010</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Periode</label>
                                    <p>Periode content</p>
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
                                <p>Indonesia</p>
                              </div>
                              <div className="form-group p-0">
                                <label className="d-block" style={{marginTop: '20px !important'}}>Prefered</label>
                                <label className="container-radio d-inline">Yes
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientView