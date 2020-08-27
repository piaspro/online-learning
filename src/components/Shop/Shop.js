import React from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
import courseData from '../../courseData';
import Header from '../Header/Header';

const Shop = () => {
   const [courses, setCourses] = useState(courseData);
   const [count, setCount] = useState([]);
   const addCourse = (product) => {
       const newCount = [...count, product];
        setCount(newCount);
   }
    return (
        <div>
            <div>
                <Header countryAdded = {count.length}
                count = {count}></Header>
            </div>
            <div className="container">
                <div className="row">
                    {
                        courses.map(items => <Course product = {items}
                        addCourse = {addCourse}
                        key ={items.id}
                        ></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;