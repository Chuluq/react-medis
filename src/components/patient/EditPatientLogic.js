import React, { Component } from 'react'
import axios from 'axios'
import EditPatient from './EditPatient'

class EditPatientLogic extends Component {
  constructor() {
    super()
    this.state = {
      idUse: "",
      idType: "",
      idNo: "",
      idPeriode: "",
      fullName: "",
      prefix: "",
      suffix: "",
      givenName: "",
      familyName: "",
      nameUse: "",
      gender: "",
      bod: "",
      maritalStatus: "",
      multipleBirth: "",
      deceasedStatus: "",
      phoneNo: "",
      phonePeriode: "",
      contactPoint: "",
      contactPointUse: "",
      photoLanguage: "",
      photo: "",
      rankUse: "",
      addressUse: "",
      addressType: "",
      country: "",
      city: "",
      state: "",
      district: "",
      line: "",
      postalCode: "",
      fullAddress: "",
      addressPeriode: "",
      relatedPersonName: "",
      nameUseR: "",
      prefixR: "",
      suffixR: "",
      familyNameR: "",
      givenNameR: "",
      genderR: "",
      contactRoleR: "",
      contactPeriodeR: "",
      contactROrg: "",
      contactSystemR: "",
      contactUseR: "",
      rankUseR: "",
      contactNoR: "",
      addressUseR: "",
      countryR: "",
      stateR: "",
      cityR: "",
      districtR: "",
      lineR: "",
      postalCodeR: "",
      fullAddressR: "",
      addressPeriodeR: "",
      languageR: "",
      prefered: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target
    type === "checkbox" ?
      this.setState({
        [name]: checked
      })
    :
    this.setState({
      [name]: value
    })
  }

  handleClick() {
    var patient = this.state

    sessionStorage.setItem("patientData", JSON.stringify(patient))
  }

  handleSubmit(event) {    
    event.preventDefault()
    // console.log(this.state)

    var patientData = sessionStorage.getItem("patientData")
    // console.log(JSON.parse(patientData))
    patientData = JSON.parse(patientData)
    patientData.languageR = this.state.languageR
    patientData.prefered = this.state.prefered

    // console.log(patientData)
    // get id from url parameter 
    const {match: {params}} = this.props
    var paramsId = params.id
    var id = paramsId.substring(1)

    axios.put(`http://localhost:3000/api/patients/${id}`, patientData)
      .then(response => {
        console.log(response.data)
        alert('data edited')
      })
      .catch(error => {
        console.log(error)    
        alert(error)      
    })
  }

  render() {    
    // const {match: {params}} = this.props
    // var paramsId = params.id
    // var id = paramsId.substring(1)

    // var patients = sessionStorage.getItem("apiData")
    // patients = JSON.parse(patients)
    // const obj = patients.filter(patients => patients.id === id)

    return (
      <EditPatient 
        handleChange={this.handleChange}
        handleClick={this.handleClick}  
        handleSubmit={this.handleSubmit}
        data={this.state}
        // obj={obj}
      />
    )
  }
}

export default EditPatientLogic