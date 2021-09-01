import React from 'react'

const AddPerson = () => {
  return (
    <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">ADD PERSON INFORMATION</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className='form-row'>
            <div className='form-group col-md-6'>
              <label for='name'>NAME</label>
              <input className='form-control' type='text'></input>
            </div>
            <div className='form-group col-md-6'>
              <label for='name'>DOB</label>
              <input className='form-control' type='date'></input>
            </div>
            <div className='form-group col-md-6'>
              <label for='gender'>GENDER</label>
              <select id="gender" class="form-control">
                <option selected value='0'>Choose...</option>
                <option value='1'>Male</option>
                <option value='2'>Female</option>
            </select>
            </div>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
  );
}

export default AddPerson;
