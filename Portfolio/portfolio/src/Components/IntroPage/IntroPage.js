import React from "react"
import "./IntroPage.css"

const IntroPage = () => {
    return(
        <div className='introPageWraper'>
            <h5>Hello My Name Is</h5>
            <h1>Prasad Satpute</h1>
            <h4>And I'm <b>WebDeveloper</b>
            {/* <span className='dynamicText'>WebDeveloper</span>
            <span className='dynamicText'>Freelancer</span>
            <span className='dynamicText'>Designer</span>
            <span className='dynamicText'>Coder</span> */}
            </h4>
            
            <button type="button" className="btn btn-outline-success" data-toggle="modal" data-target="#exampleModal">
            Hire Me
            </button>


            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-outline-success">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroPage;