import React, { Component } from 'react'

class AddMenu extends Component {
  render() {
    return (
      <div className="modal fade" id="add-menu" tabIndex="-1" role="dialog" aria-labelledby="add-menu" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="create-group-title">Add New Menu</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="px-4 py-2" id="userName" name="userName" method="post" action="">
                <div className="form-group p-0">
                  <label>Menu Name</label>
                  <input type="text" className="form-control form-control-md" required="" />
                </div>
                <div className="form-group p-0">
                  <label>Modul Name</label>
                  <input type="text" className="form-control form-control-md" required="" />
                </div>
                <div className="form-group p-0">
                  <label>Menu Icon</label>
                  <input type="text" className="form-control form-control-md" required="" />
                </div>
                <div className="form-group p-0">
                  <label>Menu Level</label>
                  <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                    <option></option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div className="form-group p-0">
                  <label>Select Sort Index</label>
                  <select className="form-control form-control-sm select2" style={{width: '100%'}}>
                    <option></option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div className="form-group p-0">
                  <label style={{display: 'block'}}>Config</label>
                  <label className="container-checkbox d-inline mr-3">View
                    <input type="checkbox" checked="checked" name="check" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container-checkbox d-inline mr-3">Insert
                    <input type="checkbox" name="check" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container-checkbox d-inline mr-3">Update
                    <input type="checkbox" checked="checked" name="check" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container-checkbox d-inline mr-3">Delete
                    <input type="checkbox" name="check" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary btn-sm mr-3" data-dismiss="modal">Cancel</button>
                <a href="#" className="btn btn-primary d-xl-inline-block btn-sm" id="save-menu">Save</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddMenu