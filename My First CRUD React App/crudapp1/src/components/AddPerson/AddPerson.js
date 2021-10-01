import axios from 'axios'
import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'

const AddPerson = () => {

  const [person,setPerson] = useState({
    name:"",
    dob:"",
    gender:""
  })

  const {name,dob,gender} = person

  const onInputChange = e => {
    setPerson({...person,[e.target.name]: e.target.value})
  }

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3004/user",person)
    window.location.reload();
  }
  

  return (
    <form onSubmit={e => onSubmit(e)}>
    <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">ADD PERSON INFORMATION</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        
          <div className='form-row'>
            <div className='form-group col-md-6'>
              <label htmlFor='name'>NAME</label>
              <input 
              className='form-control' 
              type='text'
              name="name"
              value={name}
              onChange={e => onInputChange(e)}></input>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor='dob'>DOB</label>
              <input 
              className='form-control' 
              type='date'
              name="dob"
              value={dob}
              onChange={e => onInputChange(e)}></input>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor='gender'>GENDER</label>
              <select 
              id="gender" 
              class="form-control"
              name="gender"
              value={gender}
              onChange={e => onInputChange(e)}>
                <option selected value='0'>Choose...</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
            </select>
            </div>
          </div>
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
  </form>
  );
}

export default AddPerson;
