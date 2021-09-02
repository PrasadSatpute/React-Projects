import axios from 'axios'
import React, { useEffect, useState } from 'react'
//import { useParams } from 'react-router-dom'

const UpdatePerson = () => {

  //const {id} = useParams()

    const [person,setPerson] = useState({
      name:"",
      dob:"",
      gender:""
    })
  
    const {name,dob,gender} = person
  
    const onInputChange = e => {
      setPerson({...person,[e.target.name]: e.target.value})
    }

    const [personID,setPersonID] = useState('')

    useEffect(() => {
      const getID = localStorage.getItem("id")
      setPersonID(getID)
      onLoad()
    },[])
  
    const onSubmit = async e => {
      e.preventDefault();
      await axios.put("http://localhost:3000/user",person)
      window.location.reload();
    }

    const onLoad = async e => {
      e.preventDefault();
      await axios.get(`http://localhost:3000/user/${personID}`)
      .then((response) => {
        setPerson(response.data)
      })
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
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
              </select>
              </div>
            </div>
          
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="submit" className="btn btn-primary">Update</button>
        </div>
      </div>
    </div>
    </form>
    );
}

export default UpdatePerson;
