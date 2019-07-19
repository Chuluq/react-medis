import React, { Component } from 'react'
import Sidebar from '../Sidebar'

class AddPractitioner extends Component {
  render() {
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
                      <h2 className="card-title mb-4">Add New Practitioner</h2>
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
                                      <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                                        <option></option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                        <option>Option 4</option>
                                        <option>Option 5</option>
                                        <option>Option 6</option>
                                        <option>Option 7</option>
                                      </select>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Identifier Number</label>
                                      <input type="text" name="" className="form-control form-control-sm" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group p-0">
                                      <label>Identifier Type</label>
                                      <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                                        <option></option>
                                        <option >Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                        <option>Option 4</option>
                                        <option>Option 5</option>
                                        <option>Option 6</option>
                                        <option>Option 7</option>
                                      </select>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Identifier Periode</label>
                                      <input type="text" name="" className="form-control form-control-sm" id="periode" />
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
                                        <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                                          <option></option>
                                          <option>Option 1</option>
                                          <option>Option 2</option>
                                          <option>Option 3</option>
                                          <option>Option 4</option>
                                          <option>Option 5</option>
                                          <option>Option 6</option>
                                          <option>Option 7</option>
                                        </select>
                                      </div>
                                      <div className="form-group p-0">
                                        <label>Full Name</label>
                                        <input type="text" name="" class="form-control form-control-sm" />
                                      </div>
                                      <div class="form-group p-0">
                                        <label>Sufix</label>
                                        <input type="text" name="" class="form-control form-control-sm" />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group p-0">
                                        <label>Prefix</label>
                                        <input type="text" name="" className="form-control form-control-sm" />
                                      </div>
                                      <div className="form-group p-0">
                                        <label>Family Name</label>
                                        <input type="text" name="" className="form-control form-control-sm" />
                                      </div>
                                      <div className="form-group p-0">
                                        <label>Given Name</label>
                                        <input type="text" name="" className="form-control form-control-sm" />
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
                                        <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                                          <option></option>
                                          <option>Option 1</option>
                                          <option>Option 2</option>
                                          <option>Option 3</option>
                                          <option>Option 4</option>
                                          <option>Option 5</option>
                                          <option>Option 6</option>
                                          <option>Option 7</option>
                                        </select>
                                      </div>     
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group p-0">
                                          <label>Birth Date</label>
                                          <input type="text" name="" className="form-control form-control-sm" id="bod" />
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
                                          <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                                            <option></option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                            <option>Option 4</option>
                                            <option>Option 5</option>
                                            <option>Option 6</option>
                                            <option>Option 7</option>
                                          </select>
                                        </div>
                                        <div className="form-group p-0">
                                          <label>Rank Use</label>
                                          <input type="text" name="" className="form-control form-control-sm" />
                                        </div>
                                        <div className="form-group p-0">
                                          <label className="d-block" style={{marginTop: '20px !important'}}>Practitioner Record Active</label>
                                          <label className="container-radio d-inline">Yes
                                            <input type="radio" checked="checked" name="radio" />
                                            <span className="checkmark-radio"></span>
                                          </label>
                                          <label className="container-radio d-inline">No
                                            <input type="radio" name="radio" />
                                            <span className="checkmark-radio"></span>
                                          </label>
                                        </div>
                                        <div className="form-group p-0">
                                          <label>Photo</label>
                                          <input type="file" name="" className="form-control form-control-sm" style={{border: 'none !important'}} />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group p-0">
                                          <label>Contact Point Use</label>
                                          <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                                            <option></option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                            <option>Option 4</option>
                                            <option>Option 5</option>
                                            <option>Option 6</option>
                                            <option>Option 7</option>
                                          </select>
                                        </div>
                                        <div className="form-group p-0">
                                          <label>Phone Number</label>
                                          <input type="text" name="" className="form-control form-control-sm" />
                                        </div>
                                        <div className="form-group p-0">
                                          <label>Photo language</label>
                                          <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                                            <option></option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                            <option>Option 4</option>
                                            <option>Option 5</option>
                                            <option>Option 6</option>
                                            <option>Option 7</option>
                                          </select>
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
                                        <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                                          <option></option>
                                          <option>Option 1</option>
                                          <option>Option 2</option>
                                          <option>Option 3</option>
                                          <option>Option 4</option>
                                          <option>Option 5</option>
                                          <option>Option 6</option>
                                          <option>Option 7</option>
                                        </select>
                                      </div>
                                      <div class="form-group p-0">
                                        <label>Country</label>
                                        <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                                          <option></option>
                                          <option>Option 1</option>
                                          <option>Option 2</option>
                                          <option>Option 3</option>
                                          <option>Option 4</option>
                                          <option>Option 5</option>
                                          <option>Option 6</option>
                                          <option>Option 7</option>
                                        </select>
                                      </div>
                                      <div className="form-group p-0">
                                        <label>City</label>
                                        <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                                          <option></option>
                                          <option>Option 1</option>
                                          <option>Option 2</option>
                                          <option>Option 3</option>
                                          <option>Option 4</option>
                                          <option>Option 5</option>
                                          <option>Option 6</option>
                                          <option>Option 7</option>
                                        </select>
                                      </div>
                                      <div className="form-group p-0">
                                          <label>Line</label>
                                          <input type="text" name="" className="form-control form-control-sm" />
                                      </div>
                                      <div className="form-group p-0">
                                          <label>Full Address</label>
                                          <input type="text" name="" className="form-control form-control-sm" />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div classNAme="form-group p-0">
                                        <label>Address Type</label>
                                        <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                                          <option></option>
                                          <option>Option 1</option>
                                          <option>Option 2</option>
                                          <option>Option 3</option>
                                          <option>Option 4</option>
                                          <option>Option 5</option>
                                          <option>Option 6</option>
                                          <option>Option 7</option>
                                        </select>
                                      </div>
                                      <div className="form-group p-0">
                                        <label>State</label>
                                        <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                                          <option></option>
                                          <option>Option 1</option>
                                          <option>Option 2</option>
                                          <option>Option 3</option>
                                          <option>Option 4</option>
                                          <option>Option 5</option>
                                          <option>Option 6</option>
                                          <option>Option 7</option>
                                        </select>
                                      </div>
                                      <div className="form-group p-0">
                                        <label>District</label>
                                        <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                                          <option></option>
                                          <option>Option 1</option>
                                          <option>Option 2</option>
                                          <option>Option 3</option>
                                          <option>Option 4</option>
                                          <option>Option 5</option>
                                          <option>Option 6</option>
                                          <option>Option 7</option>
                                        </select>
                                      </div>
                                      <div className="form-group p-0">
                                          <label>Postal Code</label>
                                          <input type="text" name="" className="form-control form-control-sm" />
                                      </div>
                                      <div className="form-group p-0">
                                          <label>Address Periode</label>
                                          <input type="text" name="" className="form-control form-control-sm" />
                                      </div>
                                    </div>
                                    <div className="mt-3" style={{width: '100%', textAlign: 'right'}}>
                                      <a className="btn btn-success btn-sm mr-3" style={{color: '#fff !important'}} id="prev">
                                        <i className="mdi mdi-chevron-left"></i>Previous
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
                                    <div classNAme="form-group p-0">
                                      <label>Identifier Use</label>
                                      <select class="form-control form-control-sm select2" style={{width: '100%'}}>
                                        <option></option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                        <option>Option 4</option>
                                        <option>Option 5</option>
                                        <option>Option 6</option>
                                        <option>Option 7</option>
                                      </select>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Identifier Qualification</label>
                                      <input type="text" name="" className="form-control form-control-sm" />
                                    </div>
                                    <div class="form-group p-0">
                                      <label>Qualification</label>
                                      <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                                        <option></option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                        <option>Option 4</option>
                                        <option>Option 5</option>
                                        <option>Option 6</option>
                                        <option>Option 7</option>
                                      </select>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Periode</label>
                                      <input type="text" name="" className="form-control form-control-sm" />
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Language</label>
                                      <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                                        <option></option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                        <option>Option 4</option>
                                        <option>Option 5</option>
                                        <option>Option 6</option>
                                        <option>Option 7</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group p-0">
                                      <label>Identifier Type</label>
                                      <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                                        <option></option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                        <option>Option 4</option>
                                        <option>Option 5</option>
                                        <option>Option 6</option>
                                        <option>Option 7</option>
                                      </select>
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Identifier Qualification Periode</label>
                                      <input type="text" name="" className="form-control form-control-sm" />
                                    </div>
                                    <div className="form-group p-0">
                                      <label>Issuer</label>
                                      <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                                        <option></option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                        <option>Option 4</option>
                                        <option>Option 5</option>
                                        <option>Option 6</option>
                                        <option>Option 7</option>
                                      </select>
                                    </div>
                                    <div className="form-group p-0">
                                      <label className="d-block" style={{marginTop: '20px !important'}}>Prefered</label>
                                      <label className="container-radio d-inline">True
                                        <input type="radio" checked="checked" name="radio" />
                                        <span className="checkmark-radio"></span>
                                      </label>
                                      <label className="container-radio d-inline">False
                                        <input type="radio" name="radio" />
                                        <span className="checkmark-radio"></span>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <a className="btn btn-success btn-sm mr-3" style={{color: '#fff !important'}} id="prev2">
                                      <i className="mdi mdi-chevron-left"></i>Previous
                                    </a>
                                  </div>
                                  <div className="col-md-6" style={{textAlign: 'right'}}>
                                    <a className="btn btn-secondary btn-sm mr-2 " href="practitioner.html" style={{color: '#fff !important'}}>
                                      Cancel
                                    </a>
                                    <a className="btn btn-primary btn-sm " href="practitioner.html" style={{color: '#fff !important'}}>
                                      Save
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
}

export default AddPractitioner