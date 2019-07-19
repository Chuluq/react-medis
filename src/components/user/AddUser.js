import React, { Component } from 'react'

class AddUser extends Component {
  render() {
    return (
        <div className="modal fade" id="add-user" tabIndex="-1" role="dialog" aria-labelledby="add-user" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="create-group-title">Add New User</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
              <form className="px-4 py-2" id="userName" name="userName" method="post" action="">
                <div className="form-group p-0">
                  <label>User Name</label>
                  <input type="text" className="form-control form-control-md" required="" />
                </div>
                <div className="form-group p-0">
                  <label>Fullname</label>
                  <input type="text" className="form-control form-control-md" required="" />
                </div>
                <div className="form-group p-0">
                  <label>Email</label>
                  <input type="text" className="form-control form-control-md" required="" />
                </div>
                <div className="form-group p-0">
                  <label>Phone</label>
                  <input type="text" className="form-control form-control-md" required="" />
                </div>
                <div className="form-group p-0">
                  <label>Password</label>
                  <input type="Password" className="form-control form-control-md" required="" />
                </div>
                <div className="form-group p-0">
                  <label>Group</label>
                  <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                    <option></option>
                    <option>User</option>
                    <option>Operator</option>
                    <option>Admin</option>
                  </select>
                </div>
             </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary btn-sm mr-3" data-dismiss="modal">Cancel</button>
              <a href="#" className="btn btn-primary d-xl-inline-block btn-sm" id="save-user">Save</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddUser