import React, { Component } from 'react'
import PatientView from './PatientView'

class PatientViewLogic extends Component {
  render() {    
    const {match: {params}} = this.props
    var paramsId = params.id
    var id = paramsId.substring(1)
    // console.log(id)
    var patients = sessionStorage.getItem("apiData")
    patients = JSON.parse(patients)
    const obj = patients.filter(patients => patients.id === id)
    
    return (
      <PatientView
        obj={obj}
      />
    )
  }
}

export default PatientViewLogic