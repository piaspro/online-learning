import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import course from '../../images/course.png'
import './header.css'

const Header = (props) => {
    const cost = props.count;
    const totalCost = cost.reduce((sum, product) => sum + product.cost, 0)
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
                    <div>
                    <h5 className="text-warning">Total Cost: <span className="text"><strong>{totalCost}</strong></span></h5>
                    <h5 className="text-warning"> <FontAwesomeIcon icon={faBell}/> Course Enrolled: <span className="text">{props.countryAdded}</span></h5>
                    </div>
                    
                </nav>
            </div>
        </div>
    );
};

export default Header;