import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Card from '../Card/Card';

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://learning-course-server-one.vercel.app/catagories')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='md:w-10/12 mx-auto'>
            <h1 className='text-center text-3xl m-4 text-gray-500 font-semibold'>Courses</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 w-full px-2'>
                {
                    courses.map(course => <Card key={course.id} course={course}></Card>)
                }
            </div>
        </div>
    );
};

export default Courses;