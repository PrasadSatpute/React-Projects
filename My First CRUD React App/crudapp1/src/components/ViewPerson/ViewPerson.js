import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewPerson = (props) => {

  const[name,setName] = useState('')
  const[dob,setDOB] = useState('')
  const[gender,setGender] = useState('')

  const[person,setPerson] = useState([])

  console.log(props.id)
  const UpdateID = props.id
  

  useEffect(() => {
    console.log("Modal Get ID = "+UpdateID);
    axios.get("http://localhost:3004/user/"+UpdateID).then((response) => {
      console.log(response);
      setPerson(response.data)
    })
  },[])

  // const onLoadPerson = () => {
  //   const result = axios.get("http://localhost:3004/user/"+UpdateID)
  //   console.log(" ID " + UpdateID);
  //   console.log(result.data)
  //   setPerson(result.data)
  // }

  
    return (
        <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">PERSON INFORMATION</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            
              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <label htmlFor='name'>{name}</label>
                  
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor='dob'>{dob}</label>
                  
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor='gender'>{gender}</label>
                  
                </div>
              </div>
            
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    );
}

export default ViewPerson;
