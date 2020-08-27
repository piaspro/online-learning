import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import course from '../../images/course.png'
import './header.css'

const Header = (props) => {
    return (
        <div className='container'>
            <div className='Header'>
                <img className="img-fluid" src={course} alt=""/>
                <nav>
                    <div>
                        <a href="/Shop">Shop</a>
                        <a href="/Review">Review</a>
                        <a href="/Manage">Manage</a>
                    </div>
                    <h5 className="text-warning"> <FontAwesomeIcon icon={faBell}/> Course Enrolled: <span className="text">{props.countryAdded}</span></h5>
                </nav>
            </div>
        </div>
    );
};

export default Header;