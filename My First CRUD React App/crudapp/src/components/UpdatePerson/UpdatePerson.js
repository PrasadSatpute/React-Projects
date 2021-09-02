import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UpdatePerson = (props) => {

  const[name,setName] = useState('')
  const[dob,setDOB] = useState('')
  const[gender,setGender] = useState('')

  const[person,setPerson] = useState([])

  
  const UpdateID = 10

  useEffect(() => {
    console.log('update',props.id)
  },[])

  const onLoadPerson = () => {
    
  }
  

  const onInputName = (e) => {
    const name = e.target.value
    setName(name)
  }
  const onInputDOB = (e) => {
    const dob = e.target.value
    setDOB(dob)
  }
  const onInputGender = (e) => {
    const gender = e.target.value
    setGender(gender)
  }

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put("http://localhost:3000/user",{
      id:UpdateID,
      name:name,
      dob:dob,
      gender:gender
    })
    window.location.reload();
  }

  
    return (
      <form onSubmit={e => onSubmit(e)}>
        <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">UPDATE PERSON INFORMATION</h5>
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
                  onChange={() => onInputName}></input>
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor='dob'>DOB</label>
                  <input 
                  className='form-control' 
                  type='date'
                  name="dob"
                  value={dob}
                  onChange={() => onInputDOB}></input>
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor='gender'>GENDER</label>
                  <select 
                  id="gender" 
                  class="form-control"
                  name="gender"
                  value={gender}
                  onChange={() => onInputGender}>
                    <option selected value='0'>Choose...</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
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

export default UpdatePerson;
