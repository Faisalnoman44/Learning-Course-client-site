import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { name, details} = course;

    return (
        <div>
            <h1 className='text-center text-4xl font-semibold my-5'>{name}</h1>
            <p className='text-xl text-gray-600'>{details}</p>
        </div>
    );
};

export default CourseDetails;