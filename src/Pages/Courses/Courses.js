import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Card from '../Card/Card';

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/catagories')
        .then(res => res.json())
        .then(data=> setCourses(data))
    },[])

    return (
        <div className='w-10/12 mx-auto'>
            <div className='grid grid-cols-2'>
            {
                courses.map(course => <Card key={course.id} course={course}></Card>)
            }
            </div>
        </div>
    );
};

export default Courses;