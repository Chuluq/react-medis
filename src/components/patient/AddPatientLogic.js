import React, { Component } from 'react'
import axios from 'axios'
import AddPatient from './AddPatient'

class AddPatientLogic extends Component {
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
      fullNameR: "",
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
    console.log(this.state)
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
    console.log(this.state)
  }

  // handleClick(event) {
  //   const { name } = event.target

  //   sessionStorage(name, this.state)
  // }

  handleSubmit(event) {    
    event.preventDefault()

    axios.post('http://localhost:3000/api/patients', this.state)
      .then(response => {
        console.log(response.data)
        alert('data submitted')
      })
      .catch(error => {
        console.log(error)    
        alert('error')      
    })
  }

  render() {    
    return (
      <AddPatient 
        handleChange={this.handleChange}
        handleClick={this.handleClick}  
        handleSubmit={this.handleSubmit}
        data={this.state}
      />
    )
  }
}

export default AddPatientLogic