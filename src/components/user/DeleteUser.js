import React, { Component } from 'react'

class DeleteUser extends Component {
  render() {
    return (
      <div className="modal fade" id="delete-user" tabIndex="-1" role="dialog" aria-labelledby="delete-user" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="create-group-title">Delete User</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p style={{fontSize: '14px'}}>Are you sure want to delete this user?</p>
            </div>
            <div className="modal-footer">
              <a href="#" className="btn btn-danger d-xl-inline-block btn-sm mr-3" id="delete">Delete</a>
              <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DeleteUser