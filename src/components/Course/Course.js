import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import './course.css'

const Course = (props) => {
    const {name, mentor, img, cost} = props.product
    const addCourse = props.addCourse;
    return (
        <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="card mb-4 border-success">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img  className="card-img" src={img} alt=""/>
                </div>
                <div className="col-md-8">
                    <div className="card-body text-left">
                        <h3 className="text-success"><small>Course Name:</small> <span className="text-secondary">{name}</span></h3>
                        <h6 className="text-success">Mentor: <span className="text-secondary"><strong>{mentor}</strong></span></h6>
                        <p className="text-success">Course Fee: <span className="text-secondary"><strong >BDT {cost}</strong></span></p>
                        <button 
                        onClick={() => {addCourse(props.product)}} 
                        type="button" className="button"><FontAwesomeIcon icon={faPlusSquare}/> Enroll</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Course;