import React from 'react'
import Sidebar from '../Sidebar'

function PractitionerView() {
  return (
    <div className="container-fluid d-flex p-0">
      <Sidebar />
      <div className="main-panel p-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card" style={{minHeight: `calc('100vh' - '110px')`}}>
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-md-12 px-4">
                    <h2 className="card-title mb-4">Prcatitioner Name Details
                      <span className="float-right">
                        <a className="btn btn-sm btn-warning" href="add-practitioner.html">Edit Practitioner</a>
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 px-4"> 
                    <ul className="nav nav-tabs" id="practitionerTab" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="personal-info-tab" data-toggle="tab" href="#personal-info" role="tab" aria-controls="personal-info" aria-selected="true">Personal Info</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="address-tab" data-toggle="tab" href="#address" role="tab" aria-controls="address" aria-selected="false">Address</a>
                      </li>
                        <li className="nav-item">
                        <a className="nav-link" id="others-tab" data-toggle="tab" href="#others" role="tab" aria-controls="others" aria-selected="false">Others</a>
                      </li>
                    </ul>
                    <div className="tab-content" id="practitionerTabContent">
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
                                    <p>Identifier use content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Identifier Number</label>
                                    <p>id number content</p>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group p-0">
                                    <label>Identifier Type</label>
                                    <p>id type content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Identifier Periode</label>
                                    <p>id periode</p>
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
                                    <p>name use content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Full Name</label>
                                    <p>Full Name content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Sufix</label>
                                    <p>Mr.</p>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group p-0">
                                    <label>Prefix</label>
                                    <p>S.T.</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Family Name</label>
                                    <p>Fam name content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Given Name</label>
                                    <p>Given name content</p>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="form-title">Gender and BOD</div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group p-0">
                                    <label>Gender</label>
                                    <p>Male</p>
                                  </div>                  
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group p-0">
                                    <label>Birth Date</label>
                                    <p>11-03-1993</p>
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
                                    <p>CP system content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Rank Use</label>
                                    <p>Rank Use content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label className="d-block" style={{marginTop: '20px !important'}}>Practitioner Record Active</label>
                                    <label className="container-radio d-inline">Yes</label>
                                    <input type="radio" name="recordActive" defaultChecked />
                                    <span className="checkmark-radio"></span>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Photo</label>
                                    <img src="dist/img/avatars/avatar-2.png" className="img-fluid rounded-circle align-self-center mx-5" alt="..." style={{width:100, height:'auto'}} />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group p-0">
                                    <label>Contact Point Use</label>
                                    <p>Cp use content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Phone Number</label>
                                    <p>08774143432</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Photo language</label>
                                    <p>Language</p>
                                  </div>
                                </div>
                              </div>
                              <a className="btn btn-success btn-sm float-right" style={{color: '#fff !important'}} id="next">Next
                              <i className="mdi mdi-chevron-right"></i></a>
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
                                    <p>Addr use content</p>
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
                                    <p>FA content</p>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group p-0">
                                    <label>Address Type</label>
                                    <p>Addrs type content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>State</label>
                                    <p>Yogyakarat</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>District</label>
                                    <p>Gondokusman</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Postal Code</label>
                                    <p>55010</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Address Periode</label>
                                    <p>11-03-1993</p>
                                  </div>
                                </div>
                                <div className="mt-3" style={{width: '100%', textAlign: 'right'}}>
                                  <a className="btn btn-success btn-sm mr-3" style={{color: '#fff !important'}} id="prev"><i className="mdi mdi-chevron-left"></i>Previous
                                  </a>
                                  <a className="btn btn-success btn-sm " style={{color: '#fff !important'}} id="next2">Next
                                    <i className="mdi mdi-chevron-right"></i></a>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade show  pt-4" id="others" role="tabpanel" aria-labelledby="others-tab">
                        <div className="row mb-3">
                          <div className="col-md-12 px-4">
                            <form className="px-4 py-2"  method="post" action="">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group p-0">
                                    <label>Identifier Use</label>
                                    <p>Identifier use content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Identifier Qualification</label>
                                    <p>IQ content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Qualification</label>
                                    <p>Qual content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Periode</label>
                                    <p>11-03-1993</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Language</label>
                                    <p>Indonesia</p>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group p-0">
                                    <label>Identifier Type</label>
                                    <p>Identifier type content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Identifier Qualification Periode</label>
                                    <p>IQ periode content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Issuer</label>
                                    <p>Issue content</p>
                                  </div>
                                  <div className="form-group p-0">
                                    <label className="d-block" style={{marginTop: '20px !important'}}>Prefered</label>
                                    <label className="container-radio d-inline">True
                                      <input type="radio" name="radio" defaultChecked />
                                      <span className="checkmark-radio"></span>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <a className="btn btn-success btn-sm mr-3" style={{color: '#fff !important'}} id="prev2"><i className="mdi mdi-chevron-left"></i>Previous
                                  </a>
                                </div>
                                <div className="col-md-6" style={{textAlign: 'right'}}>
                                  <a className="btn btn-secondary btn-sm mr-2 " href="practitioner.html" style={{color: '#fff !important'}}>Cancel
                                  </a>
                                  <a className="btn btn-primary btn-sm " href="practitioner.html" style={{color: '#fff !important'}}>Save
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

export default PractitionerView