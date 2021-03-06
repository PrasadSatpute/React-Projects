import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import AddPerson from './AddPerson/AddPerson';
import UpdatePerson from './UpdatePerson/UpdatePerson';
import ViewPerson from './ViewPerson/ViewPerson';


const Home = () => {
    
    const [persons, setPersons] = useState([])

    useEffect(() => {
        loadPersons()
    },[])

    const loadPersons = async () => {
        const result = await axios.get("http://localhost:3004/user")
        console.log(result.data)
        setPersons(result.data.reverse())
    }

    const [updateID,setUpdateID] = useState('')
    const [updateName,setUpdateName] = useState('')
    const [updateDOB,setUpdateDOB] = useState('')
    const [updateGender,setUpdateGender] = useState('')
    const [viewID,setviewID] = useState('')

    const [updatePerson,setUpdatePerson] = useState([])

    const setPersonID = async (id) => {
        const getID = id
        const result = await axios.get(`http://localhost:3004/user/${getID}`)
        console.log(result.data)
        setUpdatePerson(result.data)
    }

    const setPersonViewID = (id) => {
        setviewID(id)
        console.log(id);
    }

    const deletePerson = (id) => {
        axios.delete("http://localhost:3004/user/"+id).then(window.location.reload())
    }

    const deleteAll = () => {
        setPersons([])
    }

    const exitWindow = () => {
        window.close();
    }

    const h1Style = {
        color:'white'
    }

  return (
    <div className='homecard'>

        <div class="modal fade" 
        id="ViewPersonModal" 
        tabindex="-1" 
        role="dialog" 
        aria-labelledby="ViewPersonModalLabel" 
        aria-hidden="true">
            <ViewPerson id={viewID}></ViewPerson>
        </div>
        
        <div class="modal fade" 
        id="AddPersonModal" 
        tabindex="-1" 
        role="dialog" 
        aria-labelledby="AddPersonModalLabel" 
        aria-hidden="true">
            <AddPerson></AddPerson>
        </div>

        <div class="modal fade" 
        id="UpdatePersonModal" 
        tabindex="-1" 
        role="dialog" 
        aria-labelledby="UpdatePersonModalLabel" 
        aria-hidden="true">
            <UpdatePerson persondata={updatePerson}></UpdatePerson>
        </div>

        <div className="card bg-dark">
            <div className="card-header text-center">
                <h1 style={h1Style}>REACT CRUD APPLICATION</h1>
            </div>
            <div className="card-body text-center">
                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">NAME</th>
                        <th scope="col">DOB</th>
                        <th scope="col">GENDER</th>
                        <th scope="col">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {persons.map((val,index) => {
                            return(
                                <tr key={val.id}>
                                <td>{index + 1}</td>
                                <td>{val.name}</td>
                                <td>{val.dob}</td>
                                <td>{val.gender}</td>
                                <td className="operationbtn">
                                    <button 
                                    className='btn btn-primary btn-sm'
                                    data-toggle="modal" 
                                    data-target="#ViewPersonModal"
                                    onClick={() => setPersonViewID(val.id)}>View</button>
                                    <button 
                                    className='btn btn-success btn-sm'
                                    data-toggle="modal" 
                                    data-target="#UpdatePersonModal"
                                    onClick={() => setPersonID(val.id)}>Update</button>
                                    <button 
                                    className='btn btn-danger btn-sm'
                                    onClick={() => deletePerson(val.id)}>Delete</button>
                                </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="card-footer text-center">
                <div className='row'>
                    <div className='col'>
                        <button 
                        className='btn btn-success'
                        data-toggle="modal" 
                        data-target="#AddPersonModal">Add</button>
                    </div>
                    <div className='col'>
                        <button 
                        className='btn btn-danger'
                        onClick={deleteAll}>Delete All</button>
                    </div>
                    <div className='col'>
                        <button 
                        className='btn btn-primary'
                        onClick={exitWindow}>Exit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Home;