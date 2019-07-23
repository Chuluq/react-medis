import React from 'react'
import Sidebar from '../Sidebar'

function AddPatient(props) {
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
                    <h2 className="card-title mb-4">Add New Patient</h2>
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
                            <form className="px-4 py-2" method="post" action="" >
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="form-title">Identifier</div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group p-0">
                                    <label>Identifier Use</label>
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="idUse"
                                      value={props.data.idUse}
                                      onChange={props.handleChange}
                                    >
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
                                    <input type="text" className="form-control form-control-sm" 
                                      name="idNo"
                                      value={props.data.idNo}
                                      onChange={props.handleChange}                            
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group p-0">
                                    <label>Identifier Type</label>
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="idUse"
                                      value={props.data.idType}
                                      onChange={props.handleChange}
                                    >
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
                                    <label>Identifier Periode</label>
                                    <input type="text" className="form-control form-control-sm" id="periode" 
                                      name="idPeriode"
                                      value={props.data.idPeriode}
                                      onChange={props.handleChange}
                                    />
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
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="nameUse"
                                      value={props.data.nameUse}
                                      onChange={props.handleChange}
                                    >
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
                                    <input type="text" className="form-control form-control-sm" 
                                      name="fullName"
                                      value={props.data.fullName}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Suffix</label>
                                    <input type="text" className="form-control form-control-sm" 
                                      name="suffix"
                                      value={props.data.suffix}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group p-0">
                                    <label>Prefix</label>
                                    <input type="text" className="form-control form-control-sm" 
                                      name="prefix"
                                      value={props.data.prefix}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Family Name</label>
                                    <input type="text" className="form-control form-control-sm" 
                                      name="familyName"
                                      value={props.data.familyName}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Given Name</label>
                                    <input type="text" className="form-control form-control-sm" 
                                      name="givenName"
                                      value={props.data.givenName}
                                      onChange={props.handleChange}
                                    />
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
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="maritalStatus"
                                      value={props.data.maritalStatus}
                                      onChange={props.handleChange}
                                    >
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
                                    <label>Birth Date</label>
                                    <input type="text" className="form-control form-control-sm" id="bod" 
                                      name="bod"
                                      value={props.data.bod}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group p-0">
                                    <label>Gender</label>
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="gender"
                                      value={props.data.gender}
                                      onChange={props.handleChange}
                                    >
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
                                    <label className="d-block" style={{marginTop: '20px !important'}}>Multiple Birth Status</label>
                                    <label className="container-radio d-inline">True
                                      <input type="radio" 
                                        name="multipleBirth"
                                        value={props.data.multipleBirth}
                                        onChange={props.handleChange}
                                      />
                                      <span className="checkmark-radio"></span>
                                    </label>
                                    <label className="container-radio d-inline">False
                                      <input type="radio" 
                                        name="multipleBirth"
                                        value={props.data.multipleBirth}
                                        onChange={props.handleChange} 
                                      />
                                      <span className="checkmark-radio"></span>
                                    </label>
                                  </div>
                                  <div className="form-group p-0">
                                    <label className="d-block" style={{marginTop: '20px !important'}}>Deceased Status</label>
                                    <label className="container-radio d-inline">True
                                      <input type="radio" 
                                        name="deceasedStatus"
                                        value={props.data.deceasedStatus}
                                        onChange={props.handleChange}
                                      />
                                      <span className="checkmark-radio"></span>
                                    </label>
                                    <label className="container-radio d-inline">False
                                      <input type="radio" 
                                        name="deceasedStatus"
                                        value={props.data.deceasedStatus}
                                        onChange={props.handleChange}
                                      />
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
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="contactPoint"
                                      value={props.data.contactPoint}
                                      onChange={props.handleChange}
                                    >
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
                                    <label>Rank Use</label>
                                    <input type="text" className="form-control form-control-sm" 
                                      name="rankUse"
                                      value={props.data.rankUse}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Phone Periode</label>
                                    <input type="text" className="form-control form-control-sm" 
                                      name="phonePeriode"
                                      value={props.data.phonePeriode}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Photo</label>
                                    <input type="text" className="form-control form-control-sm" 
                                      name="photo"
                                      value={props.data.photo}
                                      onChange={props.handleChange}
                                    />
                                  </div>                
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group p-0">
                                    <label>Contact Point Use</label>
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="contactPointUse"
                                      value={props.data.contactPointUse}
                                      onChange={props.handleChange}
                                    >
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
                                    <input type="text" className="form-control form-control-sm" 
                                      name="phoneNo"
                                      value={props.data.phoneNo}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Photo language</label>
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="photoLanguage"
                                      value={props.data.photoLanguage}
                                      onChange={props.handleChange}
                                    >
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
                              <a className="btn btn-success btn-sm float-right" style={{color: '#fff !important'}} id="next"
                                // onClick={props.handleClick}
                              >Next
                                <i className="mdi mdi-chevron-right"></i>
                              </a>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade show pt-4" id="address" role="tabpanel" aria-labelledby="address-tab">
                        <div className="row mb-3">
                          <div className="col-md-12 px-4">
                            <form className="px-4 py-2" >
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="form-title">Address</div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group p-0">
                                    <label>Address Use</label>
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="addressUse"
                                      value={props.data.addressUse}
                                      onChange={props.handleChange}
                                    >
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
                                    <label>Country</label>
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="country"
                                      value={props.data.country}
                                      onChange={props.handleChange}
                                    >
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
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="city"
                                      value={props.data.city}
                                      onChange={props.handleChange}
                                    >
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
                                    <input type="text" className="form-control form-control-sm" 
                                      name="line"
                                      value={props.data.line}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Full Address</label>
                                    <input type="text" className="form-control form-control-sm" 
                                      name="fullAddress"
                                      value={props.data.fullAddress}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group p-0">
                                    <label>Address Type</label>
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="addressType"
                                      value={props.data.addressType}
                                      onChange={props.handleChange}
                                    >
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
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="state"
                                      value={props.data.state}
                                      onChange={props.handleChange}
                                    >
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
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="district"
                                      value={props.data.district}
                                      onChange={props.handleChange}
                                    >
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
                                    <input type="text" className="form-control form-control-sm" 
                                      name="postalCode"
                                      value={props.data.postalCode}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Address Periode</label>
                                    <input type="text" className="form-control form-control-sm" 
                                      name="addressPeriode"
                                      value={props.data.addressPeriode}
                                      onChange={props.handleChange}
                                    />
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
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="nameUseR"
                                      value={props.data.nameUseR}
                                      onChange={props.handleChange}
                                    >
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
                                    <label>Prefix</label>
                                    <input type="text" className="form-control form-control-sm" 
                                      name="prefixR"
                                      value={props.data.prefixR}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Sufix</label>
                                    <input type="text" className="form-control form-control-sm" 
                                      name="suffixR"
                                      value={props.data.suffixR}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group p-0">
                                    <label>Related Person Name</label>
                                    <input type="text" className="form-control form-control-sm" 
                                      name="relatedPersonName"
                                      value={props.data.relatedPersonName}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Family Name</label>
                                    <input type="text" className="form-control form-control-sm" id="periode" 
                                      name="familyNameR"
                                      value={props.data.familyNameR}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Given Name</label>
                                    <input type="text"className="form-control form-control-sm" 
                                      name="givenNameR"
                                      value={props.data.givenNameR}
                                      onChange={props.handleChange}
                                    />
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
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="genderR"
                                      value={props.data.genderR}
                                      onChange={props.handleChange}
                                    >
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
                                    <label>Contact Relation Periode</label>
                                    <input type="text" className="form-control form-control-sm" 
                                      name="contactPeriodeR"
                                      value={props.data.contactPeriodeR}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Contact Telecom System</label>
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="contactSystemR"
                                      value={props.data.contactSystemR}
                                      onChange={props.handleChange}
                                    >
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
                                    <label>Telecom Rank Use</label>
                                    <input type="text" className="form-control form-c`ontrol-sm" 
                                      name="rankUseR"
                                      value={props.data.rankUseR}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Address Use</label>
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="addressUseR"
                                      value={props.data.addressUseR}
                                      onChange={props.handleChange}
                                    >
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
                                    <label>Country</label>
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="countryR"
                                      value={props.data.countryR}
                                      onChange={props.handleChange}
                                    >
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
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="cityR"
                                      value={props.data.cityR}
                                      onChange={props.handleChange}
                                    >
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
                                    <input type="text" className="form-control form-control-sm" 
                                      name="lineR"
                                      value={props.data.lineR}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Address</label>
                                    <input type="text" className="form-control form-control-sm" 
                                      name="fullAddressR"
                                      value={props.data.fullAddressR}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group p-0">
                                    <label>Contact Role</label>
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="contactRoleR"
                                      value={props.data.contactRoleR}
                                      onChange={props.handleChange}
                                    >
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
                                    <label>Contact Relation Organization</label>
                                    <input type="text" className="form-control form-control-sm" 
                                      name="contactROrg"
                                      value={props.data.contactROrg}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Contact Telecom Use</label>
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="contactUseR"
                                      value={props.data.contactUseR}
                                      onChange={props.handleChange}
                                    >
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
                                    <label>Contact Telecom Number</label>
                                    <input type="text" className="form-control form-control-sm" 
                                      name="contactNoR"
                                      value={props.data.contactNoR}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Address Type</label>
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="addressTypeR"
                                      value={props.data.addressTypeR}
                                      onChange={props.handleChange}
                                    >
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
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="stateR"
                                      value={props.data.stateR}
                                      onChange={props.handleChange}
                                    >
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
                                    <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                      name="districtR"
                                      value={props.data.districtR}
                                      onChange={props.handleChange}
                                    >
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
                                    <input type="text" className="form-control form-control-sm" 
                                      name="postalCodeR"
                                      value={props.data.postalCodeR}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                  <div className="form-group p-0">
                                    <label>Periode</label>
                                    <input type="text" className="form-control form-control-sm" 
                                      name="addressPeriodeR"
                                      value={props.data.addressPeriodeR}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="mt-3" style={{width: '100%', textAlign: 'right'}}>
                                <a className="btn btn-success btn-sm mr-3" style={{color: '#fff !important'}} id="prev2">
                                  <i className="mdi mdi-chevron-left"></i>Previous
                                </a>
                                <a className="btn btn-success btn-sm " style={{color: '#fff !important'}} id="next3">Next
                                  <i className="mdi mdi-chevron-right"></i></a>
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
                                <select className="form-control form-control-sm select2" style={{width: '100%'}}
                                  name="languageR"
                                  value={props.data.languageR}
                                  onChange={props.handleChange}
                                >
                                  <option defaultValue>Option 1</option>
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
                                <label className="container-radio d-inline">Yes
                                  <input type="radio" defaultChecked 
                                    name="prefered"
                                    value={props.data.prefered}
                                    onChange={props.handleChange}
                                  />
                                  <span className="checkmark-radio"></span>
                                </label>
                                <label className="container-radio d-inline">No
                                  <input type="radio" 
                                    name="prefered"
                                    value={props.data.prefered}
                                    onChange={props.handleChange}
                                  />
                                  <span className="checkmark-radio"></span>
                                </label>
                              </div>
                              <div className="row mt-5">
                                <div className="col-md-6">
                                  <a className="btn btn-success btn-sm mr-3" style={{color: '#fff !important'}} id="prev3">
                                    <i className="mdi mdi-chevron-left"></i>Previous
                                  </a>
                                </div>
                                <div className="col-md-6" style={{textAlign: 'right'}}>
                                  <a className="btn btn-secondary btn-sm mr-2 " style={{color: '#fff !important'}}>
                                    Cancel
                                  </a>
                                  <a className="btn btn-primary btn-sm " onClick={props.handleSubmit} style={{color: '#fff !important'}}>
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

export default AddPatient