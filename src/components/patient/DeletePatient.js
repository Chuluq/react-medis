import React, { Component } from 'react'
import axios from 'axios'

class DeletePatient extends Component {
  componentDidMount() {
    const {match: {params}} = this.props
    var paramsId = params.id
    var id = paramsId.substring(1)

    axios.delete(`http://localhost:3000/api/patients/${id}`)
    .then(res => {
      console.log(res)
      alert('deleted successfully')
    }).then(err => {
      console.log(err)
      alert('error')
    })
    
    console.log(`${id}`)
  }

  render() {
    return(
      <div>Deleted successfully</div>
    )   
  }
}

export default DeletePatient