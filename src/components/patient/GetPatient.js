import React, { Component } from 'react'
import Patient from './Patient'

class GetPatient extends Component {
  constructor() {
    super()
    this.state = {
      patients: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/patients/')
    .then(res => {
      if(res.status === 200)
        return res.json()
    })
    .then(resJSON => {
      this.setState({
        patients: resJSON
      })
    })
  }

  render() {
    console.log(this.state.patients)
    return (
      <Patient 
        patients = {this.state.patients}
      />
    )
  }
}

export default GetPatient