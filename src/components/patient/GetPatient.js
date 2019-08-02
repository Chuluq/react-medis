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

  handleClick = (id) => {
    var myIndex = id
    sessionStorage.setItem("index", myIndex)
    console.log(myIndex)
  }

  render() {
    sessionStorage.setItem("apiData", JSON.stringify(this.state.patients))
    return (
      <Patient 
        patients = {this.state.patients}
        handleClick = {this.handleClick}
        myIndex = {this.myIndex}
      />
    )
  }
}

export default GetPatient