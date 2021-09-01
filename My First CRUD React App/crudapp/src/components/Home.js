import React from 'react';
import ReactDOM from 'react-dom';

import AddPerson from './Add/AddPerson';
import UpdatePerson from './Update/UpdatePerson';


const Home = () => {
  return (
    <div className='homecard'>
        
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
            <UpdatePerson></UpdatePerson>
        </div>

        <div className="card bg-dark">
            <div className="card-header text-center">
                <h1>REACT CRUD APPLICATION</h1>
            </div>
            <div className="card-body text-center">
                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">NAME</th>
                        <th scope="col">DOB</th>
                        <th scope="col">GENDER</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Prasad</td>
                            <td>18</td>
                            <td>Male</td>
                            <td>
                                <button className='btn btn-primary btn-sm'>View</button>
                                <button 
                                className='btn btn-success btn-sm'
                                data-toggle="modal" 
                                data-target="#UpdatePersonModal">Update</button>
                                <button className='btn btn-danger btn-sm'>Delete</button>
                            </td>
                        </tr>
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
                        <button className='btn btn-danger'>Delete All</button>
                    </div>
                    <div className='col'>
                        <button 
                        className='btn btn-primary'
                        >Exit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Home;